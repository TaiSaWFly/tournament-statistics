import React from "react";
import style from "./pagination.module.scss";
import useSvgIcon from "../../../hooks/appHooks/someHooks/useSvgIcon";
import { useAppSelector } from "../../../hooks/reduxHooks/reduxHooks";

interface PaginateArrowsProps {
    currentPage: number;
    pageCount: number;
    onPageChange: (pageIndex: number) => void;
}

const PaginateArrowLeft: React.FC<PaginateArrowsProps> = ({
    currentPage,
    pageCount,
    onPageChange
}) => {
    const { isMobileDevice } = useAppSelector((state) => state.system);
    const { ChevronLeft } = useSvgIcon();
    return (
        <div className={style.paginate_arrow__left}>
            {isMobileDevice ? (
                <div
                    className={style.paginate__icon_action}
                    onClick={() =>
                        currentPage !== 1 && onPageChange(currentPage - 1)
                    }
                >
                    <ChevronLeft />
                </div>
            ) : (
                <>
                    {pageCount !== 1 && currentPage !== 1 ? (
                        <div
                            className={style.paginate__icon_action}
                            onClick={() =>
                                currentPage !== 1 &&
                                onPageChange(currentPage - 1)
                            }
                        >
                            <ChevronLeft />
                        </div>
                    ) : (
                        <div className={style.paginate__icon_action}></div>
                    )}
                </>
            )}
        </div>
    );
};

const PaginateArrowRight: React.FC<PaginateArrowsProps> = ({
    currentPage,
    pageCount,
    onPageChange
}) => {
    const { isMobileDevice } = useAppSelector((state) => state.system);
    const { ChevronRight } = useSvgIcon();

    return (
        <div className={style.paginate_arrow__rigth}>
            {isMobileDevice ? (
                <div
                    className={style.paginate__icon_action}
                    onClick={() =>
                        currentPage < pageCount && onPageChange(currentPage + 1)
                    }
                >
                    <ChevronRight />
                </div>
            ) : (
                <>
                    {pageCount !== 1 && currentPage !== pageCount ? (
                        <div
                            className={style.paginate__icon_action}
                            onClick={() =>
                                currentPage < pageCount &&
                                onPageChange(currentPage + 1)
                            }
                        >
                            <ChevronRight />
                        </div>
                    ) : (
                        <div className={style.paginate__icon_action}></div>
                    )}
                </>
            )}
        </div>
    );
};

export { PaginateArrowLeft, PaginateArrowRight };
