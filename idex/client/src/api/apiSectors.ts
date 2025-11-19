import axios from 'axios'
import auth from '../utils/auth'
import type {  Sector } from '../interfaces/Commodities' 


export const apiSectors = async (): Promise< Sector[] | undefined > => {
    try {
        const host = 'https://idex-backend-5udh.onrender.com/api/sectors';
        const res = await axios.get(host, {
            headers: {
                Authorization: `Bearer ${auth.getToken()}`}
        });
        const commodities: Sector[] = res.data

        if (!commodities) {
            console.log('La lista de commodities está vacía');
        }

        return commodities
    } catch (error) {
        console.error(`Database Error: ${error}`);
    }
}