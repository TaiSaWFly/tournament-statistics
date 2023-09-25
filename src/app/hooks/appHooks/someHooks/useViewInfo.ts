import { useState } from "react";
import { useAppSelector } from "../../reduxHooks/reduxHooks";

const useViewInfo = () => {
    const { isMobileDevice } = useAppSelector((state) => state.system);
    const [isViewInfo, setIsViewInfo] = useState(false);

    return { isMobileDevice, isViewInfo, setIsViewInfo };
};

export default useViewInfo;
