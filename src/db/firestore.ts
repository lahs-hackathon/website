import {
	getFirestore,
	getDoc,
	doc
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
