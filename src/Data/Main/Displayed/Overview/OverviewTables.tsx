import ApiListData from "../Api/ApiListData";
import BackendListData from "../Backend/BackendListData";

export const OverviewTables: {title: string; data: any[]}[] = [
    {
        title: "API",
        data: ApiListData
    },
    {
        title: "BACKEND",
        data: BackendListData
    }
]