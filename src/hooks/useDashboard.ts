import { useQuery } from "@tanstack/react-query";
import { getDashboardApi } from "../api/dashboard.api";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const useDashboard = () => {
    const token = useSelector((state: RootState) => state.auth.token);

    return useQuery({
        queryKey: ["dashboard"],
        queryFn: getDashboardApi,
        enabled: !!token,
    });
};
