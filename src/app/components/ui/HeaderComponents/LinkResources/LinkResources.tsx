import React from "react";
import style from "./linkResources.module.scss";
import useSvgIcon from "../../../../hooks/appHooks/someHooks/useSvgIcon";
import {
    GOOGLE_STATISTICS_TOURNAMENTS_LINK,
    LOGS_STATISTICS_TOURNAMENTS_LINK,
    REPO_STATISTICS_TOURNAMENTS_LINK
} from "../../../../data/OtherData/links";
import useOutsideClick from "../../../../hooks/appHooks/someHooks/useOutsideClick";
import Modal from "../../../common/Modal/Modal";

const LinkResources: React.FC = () => {
    const { Link, GoogleSheetsIcon, GitHubIcon, PowerBiIcon } = useSvgIcon();
    const { ref, isShow, setShow } = useOutsideClick(false);

    return (
        <div className={style.link_resource}>
            <div
                onClick={() => setShow(!isShow)}
                className={
                    isShow ? `${style.link} ${style.active}` : style.link
                }
            >
                <div className={style.link_icon}>
                    <Link />
                </div>
            </div>

            <Modal
                className={style.link_resource__modal}
                reference={ref}
                isOpen={isShow}
            >
                <div className={style.link_item}>
                    <a
                        onClick={() => setShow(false)}
                        href={GOOGLE_STATISTICS_TOURNAMENTS_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GoogleSheetsIcon />
                    </a>
                    <span>Статистика за все турниры От Dashabreeze</span>
                </div>

                <div className={style.link_item}>
                    <a
                        onClick={() => setShow(false)}
                        href={LOGS_STATISTICS_TOURNAMENTS_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <PowerBiIcon />
                    </a>
                    <span>Логи от Мяуса</span>
                </div>

                <div className={style.link_item}>
                    <a
                        onClick={() => setShow(false)}
                        href={REPO_STATISTICS_TOURNAMENTS_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GitHubIcon />
                    </a>
                    <span>Репозиторий Приложения</span>
                </div>
            </Modal>
        </div>
    );
};

export default LinkResources;
