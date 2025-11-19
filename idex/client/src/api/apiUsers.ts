import axios from 'axios'
import type {  User } from '../interfaces/Users' 
import auth from '../utils/auth';


export const apiUser = async (username:string): Promise< User | undefined > => {
    try {
        const host = `https://idex-backend-5udh.onrender.com/api/users/name/${username}`;
        const res = await axios.get(host, {
            headers: {
                Authorization: `Bearer ${auth.getToken()}`}
        });
        const user: User = res.data

        if (!user) {
            console.log('La lista de usuarios está vacía');
        }

        return user
    } catch (error) {
        console.error(`Database Error: ${error}`);
    }
}