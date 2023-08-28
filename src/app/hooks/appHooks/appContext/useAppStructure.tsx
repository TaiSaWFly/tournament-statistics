import React, {
    useContext,
    ReactNode,
    useState,
    MutableRefObject
} from "react";
import { AppStructureContexProps } from "../../../ts/types/AppContext/AppStructureContexProps";

const AppStructureContex = React.createContext<AppStructureContexProps>({
    appStructureRef: null,
    getAppStructureRef: () => {}
});

export const useAppStructure = () => {
    return useContext(AppStructureContex);
};

interface AppStructureProviderProps {
    children: ReactNode;
}

export const AppStructureProvider: React.FC<AppStructureProviderProps> = ({
    children
}) => {
    const [appStructureRef, setAppStructureRef] =
        useState<MutableRefObject<HTMLDivElement | null> | null>(null);

    const getAppStructureRef = (
        ref: MutableRefObject<HTMLDivElement | null>
    ) => {
        setAppStructureRef(ref);
    };
    return (
        <AppStructureContex.Provider
            value={{ appStructureRef, getAppStructureRef }}
        >
            {children}
        </AppStructureContex.Provider>
    );
};
