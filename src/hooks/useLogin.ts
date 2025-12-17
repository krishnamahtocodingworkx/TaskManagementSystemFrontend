import { useMutation } from "@tanstack/react-query";
import {  loginApi } from "../api/auth.api";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/slices/authSlice";

export const useLogin = () => {
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: loginApi,

        onSuccess: (data) => {
            // Only user data
            console.log("login data on success :", data);
            const dataToSave = data.data.data;
            dispatch(setCredentials(dataToSave));
        },

        onError: (err) => {
            console.error(err);
        },
    });
};

