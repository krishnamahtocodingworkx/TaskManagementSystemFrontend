import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfileApi } from "../api/auth.api";

export const useProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: getProfileApi,
        retry: false,
    });
};


export const useProfile2 = () => {
    return useMutation({
        mutationFn: getProfileApi,
        onSuccess: ((data) => {
            console.log("response of profile : ", data);
        }),
        onError: ((error) => {
            console.log("error in profile : ", error)
        })
    });
};