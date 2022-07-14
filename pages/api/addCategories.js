import db from '../../firebase';
import {collection, getDocs, addDoc} from 'firebase/firestore';

export default async function handler(req, res) {
    const body = req.body;
    console.log(body);
    const collectionRef = collection(db, 'categories');
    try {
        const result = await addDoc(collectionRef, body);
        console.log('save categories result: ', result);
    } catch (e) {
        console.log(e);
    }

    res.status(200).json(body);
}
