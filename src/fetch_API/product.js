import axios from 'axios';

export const getProducts = async () => {
    const respone = await axios.get(`${process.env.REACT_APP_API_PRODUCT_URL}`)
    return respone;
}

export const getProduct = async (id) => {
    const respone = await axios.get(`${process.env.REACT_APP_API_PRODUCT_URL}/${id}`)
    return respone;
}