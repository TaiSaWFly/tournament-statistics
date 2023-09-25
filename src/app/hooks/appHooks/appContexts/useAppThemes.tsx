import React, { ReactNode, useContext, useEffect, useState } from "react";
import { AppThemesContextPropsType } from "../../../ts/types/AppContext/AppThemesContextPropsType";
import { useActions } from "../../reduxHooks/useActions";
import { useAppSelector } from "../../reduxHooks/reduxHooks";

const AppThemesContext = React.createContext<AppThemesContextPropsType>({
    isDarkTheme: false,
    setIsDarkTheme: () => {}
});

export const useAppThemes = () => useContext(AppThemesContext);

export const AppThemesProvider = ({ children }: { children: ReactNode }) => {
    const { isDarkTheme: isDarkThemeMemory } = useAppSelector(
        (state) => state.memory.entities.appMemory.appTheme
    );
    const { setAppThemeMemory } = useActions();
    const [isDarkTheme, setIsDarkTheme] = useState(() => isDarkThemeMemory);

    useEffect(() => {
        setAppThemeMemory(isDarkTheme);
    }, [isDarkTheme]);

    return (
        <AppThemesContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
            {children}
        </AppThemesContext.Provider>
    );
};
