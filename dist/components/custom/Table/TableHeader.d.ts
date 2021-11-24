import { CSSProperties } from "react";
export { TableHeader, DEFAULT_ORDER_DIRECTION };
export type { orderDirectionType };
declare type orderDirectionType = "asc" | "desc";
declare const DEFAULT_ORDER_DIRECTION = "asc";
declare type cellType<orderByPropertyT> = {
    id: orderByPropertyT;
    title: string;
    tooltipText?: string;
    canBeSorted?: boolean;
};
declare function TableHeader<orderByPropertyT extends string = string>(props: {
    cells: Array<cellType<orderByPropertyT>>;
    fieldCellStyles: Record<string, CSSProperties>;
    optionCellStyle?: CSSProperties;
    orderByProperty: orderByPropertyT | undefined;
    orderDirection: orderDirectionType;
    setOrderDirection: (orderDirection: orderDirectionType) => void;
    setOrderByProperty: (orderByProperty: orderByPropertyT) => void;
}): JSX.Element;
