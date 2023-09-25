import React, { ReactElement, Children, useRef, useEffect } from "react";
import style from "./appStructure.module.scss";
import { useAppStructure } from "../../../hooks/appHooks/appContexts/useAppStructure";

interface AppStructureProps {
    children: ReactElement[];
}

const AppStructure: React.FC<AppStructureProps> = ({ children }) => {
    const appStructureRef = useRef<HTMLDivElement>(null);
    const { getAppStructureRef } = useAppStructure();

    useEffect(() => {
        getAppStructureRef(appStructureRef);
    }, []);

    return (
        <div className={style.structure}>
            {Children.map(children, (child) => (
                <div className={style.structure_item} ref={appStructureRef}>
                    {child}
                </div>
            ))}
        </div>
    );
};

export default AppStructure;
