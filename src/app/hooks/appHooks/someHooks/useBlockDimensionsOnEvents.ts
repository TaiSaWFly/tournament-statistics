import { MutableRefObject, useEffect, useState } from "react";
import { blockDimentionsInitialState } from "../../../data/AppData/defaultInitialStateData";
import getBlockDimensions from "../../../utils/appUtils/other/getBlockDimensions";

type useBlockDimensionsOnEventsType = {
    ref: MutableRefObject<HTMLElement | null> | null;
    event?: "resize" | "mousedown";
    dependencies?: any;
};

const useBlockDimensionsOnEvents = ({
    ref,
    event,
    dependencies
}: useBlockDimensionsOnEventsType) => {
    const [dimensions, setDimensions] = useState(blockDimentionsInitialState);

    const handleSetDimensions = () => {
        ref && setDimensions(getBlockDimensions(ref));
    };

    const addEventListeners = () => {
        window.addEventListener("resize", handleSetDimensions);
        window.addEventListener("mousedown", handleSetDimensions);
    };

    useEffect(() => {
        if (ref) {
            setDimensions(getBlockDimensions(ref));
        }

        if (event) {
            if (event === "resize") {
                window.addEventListener("resize", handleSetDimensions);
            }

            if (event === "mousedown") {
                window.addEventListener("mousedown", handleSetDimensions);
            }
        } else {
            addEventListeners();
        }

        return () => {
            window.removeEventListener("resize", handleSetDimensions);
            window.removeEventListener("mousedown", handleSetDimensions);
        };
    }, [ref, dependencies]);

    return { dimensions };
};

export default useBlockDimensionsOnEvents;
