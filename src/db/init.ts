import { initializeApp } from 'firebase/app';

const config = {
	apiKey: "AIzaSyCjPRx350v9mYlqdAO00VIkPNmd765RHB8",
  authDomain: "lahs-hackathon.firebaseapp.com",
  projectId: "lahs-hackathon",
  storageBucket: "lahs-hackathon.appspot.com",
  messagingSenderId: "981687457773",
  appId: "1:981687457773:web:c6b5ac8add39d2703cb9e4"
};

const app = initializeApp(config);
export default app;
