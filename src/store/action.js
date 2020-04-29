import {updateCart} from '../services/cart';

export const ecartAction =(count)=>{
   return {
       type: 'INCREMENT',
       payload:count
   }
}