import { JSX } from "react";

export type ColumnType<T, K extends keyof T> = {
    key: K;
    name: string;
    component: (data: T) => JSX.Element;
};
