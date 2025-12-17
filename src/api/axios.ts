import axios from "axios";
// import { store } from "../store/store";
// import { logout } from "../store/slices/authSlice";

const api = axios.create({
    baseURL: "https://task-management-2-aad9.onrender.com",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});




// Request → Attach token
// api.interceptors.request.use((config) => {
//     // const token = store.getState().auth.token;
//     // if (token) {
//     //     config.headers.Authorization = `Bearer ${token}`;
//     // }
//     return config;
// });

// Response → Auto logout on 401
// api.interceptors.response.use(
//     (res) => res,
//     (error) => {
//         if (error.response?.status === 401) {
//             store.dispatch(logout());
//         }
//         return Promise.reject(error);
//     }
// );

export default api;
