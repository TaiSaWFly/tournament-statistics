import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { ColumnType } from "../../../ts/types/ColumnType";

interface TableProps<T, K extends keyof T> {
    dataBody: Array<T>;
    columns: Array<ColumnType<T, K>>;
    children?: React.ReactNode;
}

const Table = <T, K extends keyof T>({
    dataBody,
    columns,
    children
}: TableProps<T, K>) => {
    return (
        <table>
            {children || (
                <>
                    <TableHeader {...{ columns }} />
                    <TableBody {...{ columns, dataBody }} />
                </>
            )}
        </table>
    );
};

export default Table;
