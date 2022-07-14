import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDnDmUOQXnK-QZ8NsQx4FMtiD-rMHG8BzQ',
    authDomain: 'blog-f6230.firebaseapp.com',
    databaseURL: 'https://blog-f6230-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'blog-f6230',
    storageBucket: 'blog-f6230.appspot.com',
    messagingSenderId: '801730170790',
    appId: '1:801730170790:web:9ca348f674601b4f3cc967',
    measurementId: 'G-SHSV5BKQ45',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
