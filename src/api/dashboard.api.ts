import api from "./axios";

export const getDashboardApi = async () => {
    const { data } = await api.get("/dashboard");
    return data;
};
