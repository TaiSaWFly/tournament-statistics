import { MutableRefObject } from "react";
import { BlockDimentionsType } from "../BlockDimentionsType";

export type AppStructureContexPropsType = {
    appStructureRef: MutableRefObject<HTMLDivElement | null> | null;
    appStructureDimentions: BlockDimentionsType;
    getAppStructureRef: (ref: MutableRefObject<HTMLDivElement | null>) => void;
    setAppStructureDependencies: (dependencies: any) => void;
};
