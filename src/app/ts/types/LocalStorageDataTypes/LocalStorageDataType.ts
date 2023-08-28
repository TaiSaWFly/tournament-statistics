import { ErrorType } from "../ErrorType";
import { DashboardMemoryType } from "./DashboardMemoryType";
import { SearchMemoryType } from "./SearchMemoryType";

export type localStorageDataType =
    | SearchMemoryType
    | ErrorType
    | DashboardMemoryType;
export type localStorageKeysType = "searchMemory" | "error" | "dashboardMemory";
