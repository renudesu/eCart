import {ORDER_URL} from '../commons/constants/api-constants';
import axios from 'axios';
export const cartOrder=(order)=>{
    return axios.post(ORDER_URL,order,{headers:{'x-access-token':localStorage.getItem('token')}});
}
export const getOrder=(id)=>{
    return axios.get(`${ORDER_URL}/${id}`,{headers:{'x-access-token':localStorage.getItem('token')}});
}