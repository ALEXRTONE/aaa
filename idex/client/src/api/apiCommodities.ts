import axios from 'axios'
import auth from '../utils/auth'
import type {  Productos, Producto, Fechas } from '../interfaces/Commodities' 

export const apiCostos = async (startDate: Date): Promise<Producto[]> => {
    try {        
        // first pair of dates to query on
        const dateInit = new Date(startDate.getFullYear(),startDate.getMonth(), 1)
        const dateEnd = new Date(startDate.getFullYear(),startDate.getMonth()+1, 0)        

        const host = 'api/commodities/date'
        const res = await axios.post(host, {
            startDate: dateInit.toISOString(),
            endDate: dateEnd.toISOString()
        }, {
            headers: {
                Authorization: `Bearer ${auth.getToken()}`}
        })
         
        if (res.status !== 200) {
            console.error("No data on response");
        }
        
        const data: Promise<Producto[]> = res.data

        return data
    } catch (error) {
        console.error(`Database Error: ${error}`)
        return []
    }
}

export const apiProductos = async (): Promise< string[] | undefined > => {
    try {
        const host = 'api/commodities/products';
        const res = await axios.get(host, {
            headers: {
                Authorization: `Bearer ${auth.getToken()}`}
        });
        const productos: string[] = res.data.map((el: Productos): string => el.PRODUCTO);

        if (!productos) {
            console.log('La lista de productos está vacía');
        }

        return productos
    } catch (error) {
        console.error(`Database Error: ${error}`);
    }
}

export const apiMeses = async (): Promise<string[] | undefined> => {
    try {
        const host = 'api/commodities/meses';
        const res = await axios.get(host, {
            headers: {
                Authorization: `Bearer ${auth.getToken()}`}
        });

        const meses: string[] = res.data.map((el: Fechas): string => el.FECHA);

        if (!meses) {
            console.log('La lista de meses está vacía');
        }
        return meses
    } catch (error) {
        console.error(`Database Error: ${error}`);
    }
}

export const apiCommodities = async (): Promise< Producto[] | undefined > => {
    try {
        const host = 'api/commodities';
        const res = await axios.get(host, {
            headers: {
                Authorization: `Bearer ${auth.getToken()}`}
        });
        const commodities: Producto[] = res.data

        if (!commodities) {
            console.log('La lista de commodities está vacía');
        }

        return commodities
    } catch (error) {
        console.error(`Database Error: ${error}`);
    }
}