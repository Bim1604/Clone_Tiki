import axios from 'axios';

const url = 'http://api.pimo.studio/api/carts';

export const getAllItems = () => axios.get(`${url}`);
export const AddToCart = (postData, axiosConfig) => axios.post(url, postData, axiosConfig);
export const RemoveFromCart = (id) => axios.delete(`${url}/${id}`);