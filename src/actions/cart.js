import * as api from '../apis/cart.js';

export const getAllItems = () => async (dispatch) => {
   try {
      const { data } = await api.getAllItems();
      dispatch({ type: 'GET_ALL_ITEMS', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};

export const addToCart = (postData, axiosConfig) => async (dispatch) => {
   try {
      const { data } = await api.AddToCart(postData, axiosConfig);
      return { type: 'ADD_TO_CART', payload: data };
   } catch (error) {
      console.log(error.message);
   }
 };

 export const removeFromCart = (id) => async (dispatch) => {
    try {
       const { data } = await api.RemoveFromCart(id);
       dispatch({ type: 'REMOVE_FROM_CART', payload: data });
    } catch (error) {
       console.log(error.message);
    }
 };
