import db from '../../firebase';
import {collection, getDocs, addDoc} from 'firebase/firestore';

export default async function handler(req, res) {
    console.log('save result: ', req.body);
    res.status(200).json(req.body);
}
