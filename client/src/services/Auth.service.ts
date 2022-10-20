import axios from "axios";
import { ILogin, IRegister } from "../models/Auth.model";

const URL = process.env.REACT_APP_URL_BASE;

const login = async (data: ILogin) => {
    return await axios.post(`${URL}login`, data);
};

const register = async (data: IRegister) => {
    return await axios.post(`${URL}users`, data);
};

const authService = {
    register,
    login
};

export default authService;