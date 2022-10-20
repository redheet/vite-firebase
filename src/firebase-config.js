import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// change to your firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC_K9EeoV3fNxvQyIgiD9G1EkN3WLBGAMY',
  authDomain: 'fir-tutorial-fc1a6.firebaseapp.com',
  projectId: 'fir-tutorial-fc1a6',
  storageBucket: 'fir-tutorial-fc1a6.appspot.com',
  messagingSenderId: '849252743035',
  appId: '1:849252743035:web:b95ba2c2a52d5752cd2fde',
  measurementId: 'G-SG3RH3SJDF',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
