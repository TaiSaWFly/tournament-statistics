import React, {
    useContext,
    ReactNode,
    useState,
    MutableRefObject,
    useEffect
} from "react";
import { AppStructureContexPropsType } from "../../../ts/types/AppContext/AppStructureContexPropsType";
import { blockDimentionsInitialState } from "../../../data/defaultInitialStateData";
import useBlockDimensionsOnEvents from "../someHooks/useBlockDimensionsOnEvents";

const AppStructureContex = React.createContext<AppStructureContexPropsType>({
    appStructureRef: null,
    appStructureDimentions: blockDimentionsInitialState,
    getAppStructureRef: () => {},
    setAppStructureDependencies: () => {}
});

export const useAppStructure = () => useContext(AppStructureContex);

export const AppStructureProvider = ({ children }: { children: ReactNode }) => {
    const [appStructureRef, setAppStructureRef] =
        useState<MutableRefObject<HTMLDivElement | null> | null>(null);
    const [dependencies, setDependencies] = useState<any>(null);

    const { dimensions } = useBlockDimensionsOnEvents({
        ref: appStructureRef,
        dependencies
    });
    const [appStructureDimentions, setAppStructureDimentions] = useState(
        blockDimentionsInitialState
    );

    useEffect(() => {
        setAppStructureDimentions(dimensions);
    }, [dimensions]);

    const getAppStructureRef = (
        ref: MutableRefObject<HTMLDivElement | null>
    ) => {
        setAppStructureRef(ref);
    };

    const setAppStructureDependencies = (dependencies: any) => {
        setDependencies(dependencies || null);
    };

    return (
        <AppStructureContex.Provider
            value={{
                appStructureRef,
                appStructureDimentions,
                getAppStructureRef,
                setAppStructureDependencies
            }}
        >
            {children}
        </AppStructureContex.Provider>
    );
};
