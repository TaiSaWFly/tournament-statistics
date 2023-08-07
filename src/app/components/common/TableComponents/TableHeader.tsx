import React from "react";
import { ColumnType } from "../../../ts/types/ColumnType";

interface TableHeaderProps<T, K extends keyof T> {
    columns: Array<ColumnType<T, K>>;
}

const TableHeader = <T, K extends keyof T>({
    columns
}: TableHeaderProps<T, K>) => {
    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={String(column.key)}>{column.name}</th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
