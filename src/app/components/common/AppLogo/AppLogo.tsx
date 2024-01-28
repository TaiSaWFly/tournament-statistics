import React from "react";
import style from "./appLogo.module.scss";

const AppLogo: React.FC = () => {
    return (
        <a
            className={style.logo}
            href="https://www.twitch.tv/anakq"
            target="_blank"
            rel="noreferrer"
        >
            <img
                src={
                    "https://static-cdn.jtvnw.net/jtv_user_pictures/e4677934-9998-4c51-af88-8d4923120f3a-profile_image-70x70.png"
                }
                alt="Twitch Anakq"
            />
        </a>
    );
};

export default AppLogo;
