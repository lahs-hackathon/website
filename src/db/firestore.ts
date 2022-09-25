import {
	getFirestore,
	getDoc,
	doc,
	setDoc,
	getDocs,
	collection,
	updateDoc,
	deleteDoc
} from 'firebase/firestore';
import { auth } from './auth';
import app from './init';
import { UserData } from 'types/user';
import { RoomType, RoomIdType } from 'src/types/city';
import { uuid } from 'utils/uuid';

export const db = getFirestore(app);

export const getCurrentUser = () => {
	return auth.currentUser;
};

export const getUserInfo = async (): Promise<UserData | null> => {
	const user = getCurrentUser();
	if (user === null) return null;
	const userDoc = await getDoc(doc(db, 'users', user.uid));
	if (!userDoc.exists()) return null;
	return userDoc.data() as UserData;
};

export const setUserData = async (person: UserData): Promise<void> => {
	const user = getCurrentUser();
	if (user === null) return;
	await setDoc(doc(db, 'users', user.uid), person);
};

export const getSavedCities = async (): Promise<string[]> => {
	const cities = await getDoc(doc(db, 'info', 'cities'));
	const data = cities.data();
	if (data) {
		return data.cities;
	}
	return [];
};

export const getCities = async (): Promise<Map<string, RoomType[]>> => {
	let cities = new Map<string, RoomType[]>();
	const savedCities = await getSavedCities();
	for (let i = 0; i < savedCities.length; i++) {
		let currentCity = savedCities[i];
		let cityInfo: RoomType[] = [];
		const cityCol = await getDocs(collection(db, 'cities', 'cities', currentCity));
		cityCol.forEach(cityDoc => {
			const obj: RoomType = {
				...cityDoc.data() as RoomType,
				id: cityDoc.id
			}
			cityInfo.push(obj);
		});
		cities.set(currentCity, cityInfo);
	}
	return cities;
};

export const addRoom = async (room: RoomType, roomId?: string): Promise<void> => {
	const user = getCurrentUser();
	if (user === null) return;
	let id: string;
	if (!roomId) {
		id = uuid();
	} else {
		id = roomId;
	}
	let savedCities = await getSavedCities();
	savedCities = [...savedCities, room.city];
	const citiesSet = new Set(savedCities);
	savedCities = [...citiesSet];
	await updateDoc(doc(db, 'info', 'cities'), {
		cities: savedCities
	});
	await setDoc(doc(db, 'cities', 'cities', room.city, id), room);
	const userInfo = await getUserInfo();
	if (userInfo?.roomIds) {
		const roomIdList: RoomIdType[] = userInfo.roomIds;
		await updateDoc(doc(db, 'users', user.uid), {
			roomIds: [...roomIdList, {id, city: room.city}]
		});
	} else {
		await updateDoc(doc(db, 'users', user.uid), {
			roomIds: [{id, city: room.city}]
		});
	}
};

export const getRoomWithId = async (city: string, id: string): Promise<RoomType> => {
	const room = await getDoc(doc(db, 'cities', 'cities', city, id));
	let roomInfo: RoomType = {
		...room.data() as RoomType,
		id: room.id
	}
	return roomInfo;
};

export const getRoomsFromIds = async (ids: RoomIdType[]): Promise<RoomType[]> => {
	let rooms: RoomType[] = [];
	for (let i = 0; i < ids.length; i++) {
		const roomInfo = ids[i];
		const room = await getRoomWithId(roomInfo.city, roomInfo.id);
		rooms.push(room);
	}
	return rooms;
};

export const deleteRoom = async (room: RoomType, id: string): Promise<void> => {
	await deleteDoc(doc(db, 'cities', 'cities', room.city, id));
	const user = getCurrentUser();
	const userInfo: UserData | null = await getUserInfo();
	if (userInfo !== null && user !== null) {
		const idArr = userInfo.roomIds!.filter((item: RoomIdType): boolean => item.id !== id);
		console.log(idArr);
		await updateDoc(doc(db, 'users', user.uid), {
			roomIds: idArr
		});
	}
};

export const createChatGroup = async (city: string, id: string): Promise<void> => {
	const user = getCurrentUser();
	if (user === null) return;
	const currentData = await getDoc(doc(db, 'chats', city, id, user.uid));
	if (!currentData.exists()) {
		await setDoc(doc(db, 'chats', city, id, user.uid), {
			messages: []
		});
		const currentChatIdsDoc = await getDoc(doc(db, 'users', user.uid, 'chats', 'chatIds'));
		if (!currentChatIdsDoc.exists()) {
			await setDoc(doc(db, 'users', user.uid, 'chats', 'chatIds'), {
				ids: [{id, city}]
			});
		} else {
			const data = currentChatIdsDoc.data();
			await updateDoc(doc(db, 'users', user.uid, 'chats', 'chatsIds'), {
				ids: [...data.ids, {id, city}]
			})
		}
	}
};

export const writeMessage = async (city: string, id: string, text: string): Promise<void> => {
	const user = getCurrentUser();
	if (user === null) return;
	const currentMessageDoc = await getDoc(doc(db, 'chats', city, id, user.uid));
	if (currentMessageDoc.exists()) {
		const data = currentMessageDoc.data();
		const messages = [...data.messages, text];
		await updateDoc(doc(db, 'chats', city, id, user.uid), { messages });
	}
};
