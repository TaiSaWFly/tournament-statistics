import React, { ComponentType } from "react";
import { useAppThemes } from "../../hooks/appHooks/appContexts/useAppThemes";

const withAppTheme =
    (Component: ComponentType): React.FC =>
    ({ ...props }) => {
        const { isDarkTheme } = useAppThemes();

        return (
            <div className={`app ${isDarkTheme ? "dark" : ""}`}>
                <Component {...props} />
            </div>
        );
    };

export default withAppTheme;
