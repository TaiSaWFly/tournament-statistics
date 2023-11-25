import { useEffect, useState } from "react";
import getWindowDimensions from "../../../utils/appUtils/other/getWindowDimensions";

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowDimensions(getWindowDimensions());
        };

        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return { ...windowDimensions };
};

export default useWindowDimensions;
