import React, { ReactNode, useState, useEffect } from "react";
import style from "./copyComponent.module.scss";
import useCopy from "../../../hooks/appHooks/someHooks/useCopy";
import { useAppStructure } from "../../../hooks/appHooks/appContexts/useAppStructure";
import CopyToastifyComponent from "./CopyToastifyComponent";
import { useAppSelector } from "../../../hooks/reduxHooks/reduxHooks";

interface CopyComponentProps {
    children: ReactNode;
    copyTextInfo?: string;
    copyText: string;
}

const CopyComponent: React.FC<CopyComponentProps> = ({
    children,
    copyTextInfo,
    copyText
}) => {
    const { isMobileDevice } = useAppSelector((state) => state.system);
    const { appStructureRef } = useAppStructure();
    const { CopyIcon, handleCopyToClipBoard } = useCopy();
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        handleCopyToClipBoard(copyText);
        setIsCopied(true);
    };

    useEffect(() => {
        let timeout: any;
        if (isCopied) {
            timeout = setTimeout(() => setIsCopied(false), 1400);
        }

        return () => clearTimeout(timeout);
    }, [isCopied]);

    return (
        <>
            <span className={isMobileDevice ? style.copy__visible : style.copy}>
                <span
                    className={
                        !isCopied ? style.copy_group : style.copy_group__copied
                    }
                >
                    <span className={style.copy_component}>{children}</span>

                    <span className={style.copy_icon} onClick={handleCopy}>
                        <CopyIcon />
                    </span>
                </span>
            </span>

            {isCopied && appStructureRef?.current && (
                <CopyToastifyComponent
                    clientHeight={appStructureRef.current.clientHeight}
                    clientWidth={appStructureRef.current.clientWidth}
                    copyText={copyText}
                    copyTextInfo={copyTextInfo}
                />
            )}
        </>
    );
};

export default CopyComponent;
