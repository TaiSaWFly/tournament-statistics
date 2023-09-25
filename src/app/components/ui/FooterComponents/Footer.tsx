import React from "react";
import style from "./footer.module.scss";
import ComponentContainer from "../../common/ComponentContainer/ComponentContainer";

const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <ComponentContainer>
                <div className={style.footer_content}>
                    <span>ver.{process.env.REACT_APP_VERSION}</span>
                </div>
            </ComponentContainer>
        </footer>
    );
};

export default Footer;
