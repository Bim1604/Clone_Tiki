import * as api from '../apis/cart.js';

export const getAllItems = () => async (dispatch) => {
   try {
      const { data } = await api.getAllItems();
      dispatch({ type: 'GET_ALL_ITEMS', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};

export const AddToCart = (postData, axiosConfig) => async (dispatch) => {
    try {
       const { data } = await api.getAllItems(postData, axiosConfig);
       dispatch({ type: 'ADD_TO_CART', payload: data });
    } catch (error) {
       console.log(error.message);
    }
 };

 export const RemoveFromCart = (id) => async (dispatch) => {
    try {
       const { data } = await api.RemoveFromCart(id);
       dispatch({ type: 'REMOVE_FROM_CART', payload: data });
    } catch (error) {
       console.log(error.message);
    }
 };
