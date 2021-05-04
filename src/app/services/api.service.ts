import axios from 'axios';
import { ItemsList } from '../item-list/item-list.component';

export const api = axios.create({
    baseURL: 'http://localhost:3333/'
});

export async function getItems() : Promise<ItemsList[]>{
    const val = await api.get('items'); 
    return val.data;
}