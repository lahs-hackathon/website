import {
	getFirestore,
	getDoc,
	doc,
	setDoc,
	getDocs,
	collection
} from 'firebase/firestore';
import { auth } from './auth';
import app from './init';
import { UserData } from 'types/user';

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
	console.log('setting');
	await setDoc(doc(db, 'users', user.uid), person);
};

export const getCities = async (): Promise<string[]> => {
	let cities: string[] = [];
	const citiesCol = await getDocs(collection(db, 'cities'));
	citiesCol.forEach((city) => {
		cities.push(city.id);
	});
	return cities;
};
