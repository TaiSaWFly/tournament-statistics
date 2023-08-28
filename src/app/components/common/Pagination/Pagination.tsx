import React from "react";
import style from "./pagination.module.scss";
import createPaginatePages from "../../../utils/appUtils/transformAndCreateData/createData/paginatePage/createPaginatePages";
import { TournamentNumber } from "../../../ts/types/TournamentTypes/TournamentNumber";
import useSvgIcon from "../../../hooks/appHooks/useSvgIcon";

interface PaginationProps {
    itemCount: number;
    pageSize: number;
    currentPage: number;
    pageNames: TournamentNumber[];
    onPageChange: (pageIndex: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    itemCount,
    pageSize,
    currentPage,
    pageNames,
    onPageChange
}) => {
    const { ChevronLeft, ChevronRight } = useSvgIcon();

    const pageCount = Math.ceil(itemCount / pageSize);
    const pages = createPaginatePages(pageNames, pageCount, pageSize);

    return (
        <div className={style.paginate}>
            {pageCount !== 1 && currentPage !== 1 ? (
                <div
                    className={style.paginate__icon_action}
                    onClick={() =>
                        currentPage !== 1 && onPageChange(currentPage - 1)
                    }
                >
                    <ChevronLeft />
                </div>
            ) : (
                <div className={style.paginate__icon_action}></div>
            )}

            <ul className={style.paginate_list}>
                {pages.map((page) => (
                    <li
                        key={"page_" + page.pageNumber}
                        className={
                            currentPage === page.pageNumber
                                ? style.paginate_list__item__active
                                : style.paginate_list__item
                        }
                        onClick={() => onPageChange(page.pageNumber)}
                    >
                        <div className={style.paginate_list__item_names}>
                            {page.pageNames.map((pageName) => (
                                <span key={pageName._id}>
                                    {" "}
                                    {pageName.tournamentNumber}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>

            {pageCount !== 1 && currentPage !== pageCount ? (
                <div
                    className={style.paginate__icon_action}
                    onClick={() =>
                        currentPage < pageCount && onPageChange(currentPage + 1)
                    }
                >
                    <ChevronRight />
                </div>
            ) : (
                <div className={style.paginate__icon_action}></div>
            )}
        </div>
    );
};

export default Pagination;
