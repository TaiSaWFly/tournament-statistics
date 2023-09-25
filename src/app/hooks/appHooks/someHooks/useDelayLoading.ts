import { useEffect, useState } from "react";

const useDelayLoading = (delay: number, dimention?: any) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timeout);
    }, [dimention]);

    return { isLoading };
};

export default useDelayLoading;
