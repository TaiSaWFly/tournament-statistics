import React from "react";
import style from "./footer.module.scss";
import ComponentContainer from "../../common/ComponentContainer/ComponentContainer";
import { GOOGLE_STATISTICS_TOURNAMENTS_LINK } from "../../../data/OtherData/links";

const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <ComponentContainer>
                <div className={style.footer_content__wrap}>
                    <div className={style.footer_content}>
                        <span>
                            Created by{" "}
                            <a
                                href="https://discordapp.com/users/378635814768214016/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Tai_SaWFly
                            </a>
                        </span>
                        <span>
                            <a
                                href={GOOGLE_STATISTICS_TOURNAMENTS_LINK}
                                target="_blank"
                                rel="noreferrer"
                            >
                                DataBase
                            </a>{" "}
                            taken by Dashabreeze
                        </span>
                    </div>
                </div>
            </ComponentContainer>
        </footer>
    );
};

export default Footer;
