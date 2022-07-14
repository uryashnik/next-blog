import db from '../../firebase';
import {collection, getDocs, addDoc} from 'firebase/firestore';

export default async function handler(req, res) {
    const body = req.body;
    const collectionRef = collection(db, 'posts');
    try {
        const result = await addDoc(collectionRef, body);
    } catch (e) {
        console.log(e);
    }

    console.log('save result: ', body);
    res.status(200).json(body);
}
