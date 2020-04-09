import {BOOK_URL} from '../commons/constants/api.constants';
import axios from 'axios';
export const CreateBook=(book)=>{
    return axios.post(BOOK_URL,book,{headers:{'x-access-token':localStorage.getItem('token')}});
}
export const GetBook=()=>{
    return axios.get(BOOK_URL,{headers:{'x-access-token':localStorage.getItem('token')}});
}