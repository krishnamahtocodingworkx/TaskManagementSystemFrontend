import { ENDPOINTS } from "../utils/endPoints";
import api from "./axios";

export const loginApi = async (payload: {
    email: string;
    password: string;
}) => {
    const res = await api.post(ENDPOINTS.LOGIN, payload);
    console.log("login response :", res)
    return res;
};

export const registerApi = async (payload: {
    name: string;
    email: string;
    password: string;
}) => {
    const res = await api.post(ENDPOINTS.REGISTER, payload);
    console.log("signup response :", res);
    return res.data.data;
};

export const getProfileApi = async () => {
    console.log("calling get profile api")
    const res = await api.get(ENDPOINTS.ME);
    console.log("my profile ::::::::::::::", res);
    return res.data.data;
};

export const logoutApi = async () => {
    const res = await api.post(ENDPOINTS.LOGOUT);
    console.log("logout response :", res);
    return res.data;
}