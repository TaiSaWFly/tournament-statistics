import { MutableRefObject } from "react";

export type AppStructureContexProps = {
    appStructureRef: MutableRefObject<HTMLDivElement | null> | null;
    getAppStructureRef: (ref: MutableRefObject<HTMLDivElement | null>) => void;
};
