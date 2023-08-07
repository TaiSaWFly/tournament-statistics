import { searchMemoryInitialState } from "../../data/defaultInitialStateData";
import { ErrorType } from "../../ts/types/ErrorType";
import { SearchMemoryType } from "../../ts/types/SearchMemoryType";

type localStorageDataType = SearchMemoryType | ErrorType;
type localStorageKeysType = "searchMemory" | "error";

const localStorageService = {
    toStorage: (key: localStorageKeysType, data: localStorageDataType) => {
        localStorage.setItem(key, JSON.stringify(data));
    },
    fromStorage: (key: localStorageKeysType): localStorageDataType | null => {
        return JSON.parse(localStorage.getItem(key) as string);
    },
    removefromStorage: (key: localStorageKeysType) => {
        localStorage.removeItem(key);
    },
    initialStorage: () => {
        if (!localStorageService.fromStorage("searchMemory")) {
            localStorageService.toStorage(
                "searchMemory",
                searchMemoryInitialState
            );
        }
    }
};

export default localStorageService;
