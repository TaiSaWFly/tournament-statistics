import { useEffect, useState } from "react";

const useDelayLoading = (delay: number) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return { isLoading };
};

export default useDelayLoading;
