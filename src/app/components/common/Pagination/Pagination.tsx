import React from "react";
import style from "./pagination.module.scss";
import createPaginatePages from "../../../utils/appUtils/transformAndCreateData/createData/paginatePage/createPaginatePages";
import { TournamentNumber } from "../../../ts/types/TournamentTypes/TournamentNumber";
import { PaginateArrowLeft, PaginateArrowRight } from "./PaginateArrows";

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
    const pageCount = Math.ceil(itemCount / pageSize);
    const pages = createPaginatePages(pageNames, pageCount, pageSize);

    return (
        <div className={style.paginate}>
            <div className={style.paginate_wrap}>
                <PaginateArrowLeft
                    {...{
                        pageCount,
                        currentPage,
                        onPageChange
                    }}
                />

                <div className={style.paginate_list__wrap}>
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
                                <div
                                    className={style.paginate_list__item_names}
                                >
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
                </div>

                <PaginateArrowRight
                    {...{
                        pageCount,
                        currentPage,
                        onPageChange
                    }}
                />
            </div>
        </div>
    );
};

export default Pagination;
