import {
    dashboardMemoryInitialState,
    searchMemoryInitialState
} from "../../data/defaultInitialStateData";
import {
    localStorageDataType,
    localStorageKeysType
} from "../../ts/types/LocalStorageDataTypes/LocalStorageDataType";

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

        if (!localStorageService.fromStorage("dashboardMemory")) {
            localStorageService.toStorage(
                "dashboardMemory",
                dashboardMemoryInitialState
            );
        }
    }
};

export default localStorageService;
