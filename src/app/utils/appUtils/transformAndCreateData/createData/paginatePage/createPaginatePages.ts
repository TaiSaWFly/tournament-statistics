import { PaginatePage } from "../../../../../ts/types/PaginatePage";
import { TournamentNumber } from "../../../../../ts/types/TournamentTypes/TournamentNumber";

const createPaginatePages = (
    pageNames: TournamentNumber[],
    pageCount: number,
    pageSize: number
): PaginatePage[] => {
    const pagesArray: PaginatePage[] = [];

    for (let i = 1; i <= pageCount; i++) {
        const startIndex = (i - 1) * pageSize;
        const dataCrop = [...pageNames].splice(startIndex, pageSize);
        const page = {
            pageNumber: i,
            pageNames: dataCrop
        };

        pagesArray.push(page);
    }

    return pagesArray;
};

export default createPaginatePages;
