import axios from "axios"

export const login = async (mobile, password) => {
    const respone = await axios.post(`${process.env.REACT_APP_API_URL}/login/user`, {mobile, password});
    return respone;
}