import React from "react";
import { ColumnType } from "../../../ts/types/ColumnType";
import _ from "lodash";

interface TableBodyProps<T, K extends keyof T> {
    dataBody: Array<T>;
    columns: Array<ColumnType<T, K>>;
}

const TableBody = <T, K extends keyof T>({
    dataBody: data,
    columns
}: TableBodyProps<T, K>) => {
    const renderContent = (item: T, column: ColumnType<T, K>) => {
        if (column.component) {
            const component = column.component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        }
        return _.get(item, column.key);
    };

    return (
        <tbody>
            {data.map((item, index) => {
                return (
                    <tr key={`row-${index}`}>
                        {columns.map((column, index2) => {
                            return (
                                <td key={`cell-${index2}`}>
                                    {renderContent(item, column)}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;
