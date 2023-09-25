import React from "react";
import style from "./switchTheme.module.scss";
import useSvgIcon from "../../../../hooks/appHooks/someHooks/useSvgIcon";
import { useAppThemes } from "../../../../hooks/appHooks/appContexts/useAppThemes";

const SwitchTheme: React.FC = () => {
    const { LigthTheme, DarkTheme } = useSvgIcon();
    const { isDarkTheme, setIsDarkTheme } = useAppThemes();

    return (
        <div className={style.switch_theme}>
            <label htmlFor="switch_theme" className={style.switch}>
                <input
                    className={style.switch_checkbox}
                    id="switch_theme"
                    name="switch_theme"
                    type="checkbox"
                    onChange={() => setIsDarkTheme(!isDarkTheme)}
                    checked={isDarkTheme}
                />
                <div className={style.switch_slider}>
                    <div className={style.switch_slider__icon_dark}>
                        <DarkTheme />
                    </div>
                    <div className={style.switch_slider__icon_ligth}>
                        <LigthTheme />
                    </div>
                </div>
            </label>
        </div>
    );
};

export default SwitchTheme;
