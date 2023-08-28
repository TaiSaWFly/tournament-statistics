import React, { useEffect, useRef, useState } from "react";
import style from "./copyComponent.module.scss";
import useSvgIcon from "../../../hooks/appHooks/useSvgIcon";

interface CopyToastifyComponentProps {
    clientHeight: number;
    clientWidth: number;
    copyText: string;
    copyTextInfo?: string;
}

const CopyToastifyComponent: React.FC<CopyToastifyComponentProps> = ({
    clientHeight,
    clientWidth,
    copyText,
    copyTextInfo
}) => {
    const { Check } = useSvgIcon();
    const copyToastifyRef = useRef<HTMLDivElement>(null);
    const [dimentions, setDimentions] = useState<{
        width: number;
        height: number;
    } | null>(null);
    const indent = 25;

    useEffect(() => {
        if (copyToastifyRef.current) {
            setDimentions({
                width: copyToastifyRef.current.clientWidth,
                height: copyToastifyRef.current.clientHeight
            });
        }
    }, [copyToastifyRef]);

    return (
        <div
            className={style.copy_toastify}
            ref={copyToastifyRef}
            style={
                dimentions
                    ? {
                          top: clientHeight - dimentions.height - indent,
                          right: clientWidth - dimentions.width - indent
                      }
                    : {
                          opacity: 0
                      }
            }
        >
            <div className={style.copy_toastify__text}>
                {copyTextInfo && `${copyTextInfo}: `} <span>{copyText}</span>
            </div>

            <div className={style.copy_toastify__icon}>
                <Check />
            </div>
        </div>
    );
};

export default CopyToastifyComponent;
