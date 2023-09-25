import { ErrorType } from "../ErrorType";
import { AppMemoryType } from "./AppMemoryType";
import { SearchMemoryType } from "./SearchMemoryType";

export type localStorageDataType = SearchMemoryType | ErrorType | AppMemoryType;
export type localStorageKeysType = "searchMemory" | "error" | "appMemory";
