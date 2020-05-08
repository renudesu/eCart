import {BOOK_URL} from '../commons/constants/api-constants';
import axios from 'axios';
// import instance from '../commons/constants/interceptors'
export const CreateBook=(book)=>{
    return axios.post(BOOK_URL,book,{headers:{'x-access-token':localStorage.getItem('token')}});
}
export const GetBook=()=>{
    return axios.get(BOOK_URL,{headers:{'x-access-token':localStorage.getItem('token')}});
}
export const UpdateBook=(renu)=>{
    return axios.put(`${BOOK_URL}/${renu._id}`,renu,{headers:{'x-access-token':localStorage.getItem('token')}});
}

export const GetBookById = (id) => {
    return axios.get(`${BOOK_URL}/${id}`,{headers:{'x-access-token':localStorage.getItem('token')}});
}
export const DeleteBook=(id)=>{
    return axios.delete(`${BOOK_URL}/${id}`,{headers:{'x-access-token':localStorage.getItem('token')}});
}