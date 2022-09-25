import {
	getAuth,
	setPersistence,
	browserLocalPersistence,
	GoogleAuthProvider,
	signInWithPopup,
	signOut as fbSignOut
} from 'firebase/auth';
import app from './init';

export const auth = getAuth(app);

export const signInWithGoogle = async (): Promise<void> => {
  await setPersistence(auth, browserLocalPersistence).then(() => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }).catch(() => { });

	// init user here
};

export const signOut = () => {
	fbSignOut(auth);
};
