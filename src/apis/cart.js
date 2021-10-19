import axios from 'axios';

const url = 'https://api.pimo.studio/api/v1/auth'

export const getAllItems = () => axios.get(`${url}`);
export const AddToCart = (postData, axiosConfig) => axios.post(url, postData, axiosConfig);
export const RemoveFromCart = (id) => axios.delete(`${url}/${id}`);