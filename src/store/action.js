import { getCart } from "../services/cart";
import {GetBook} from '../services/book';



const cartDetails = (data) => {
    return {
        type: 'CART_LOAD_SUCCESS',
        payload: data
    }
}
const books = (data) =>{
    return {
        type: 'BOOKS_LOAD_SUCCESS',
        payload:data
    }
}

const updateCount = (count) => {
    return {
        type: 'INCREMENT',
        payload: count
    }
}


export const ecartAction = () => {
    return function (dispatch) {
        const userInfo = localStorage.getItem('user');
        const user = JSON.parse(userInfo);
        getCart(user._id).then((success) => { 
            dispatch(cartDetails(success.data));
            dispatch(updateCount(success.data.totalItems));
        });
     
    }
}
export const ecartActionRemove = (count) => {
    return {
        type: 'DECREMENT',
        payload: count
    }
}
export const bookAction = () => {
    return function (dispatch) {
        GetBook().then((success) => {
            dispatch(books(success.data));
        })
    }
}

