import { CSSProperties } from "react";
import { optionItemType } from "./Table";
import { orderDirectionType } from "./TableHeader";
export { TableBody };
export type { tableRowFieldType };
declare type tableRowFieldType<InputT, orderByPropertyT = string> = {
    id: orderByPropertyT;
    title: string;
    tooltipText?: string;
    canBeSorted: boolean;
    cellStyle?: CSSProperties;
    extractor: (data: InputT) => string | number;
    getSortingValue?: (data: InputT) => number;
    render?: (data: InputT) => JSX.Element | string | number | undefined;
    width: number;
};
declare function TableBody<InputT, orderByPropertyT extends string = string>(props: {
    data: InputT[];
    fields: Array<tableRowFieldType<InputT, orderByPropertyT>>;
    isRowHighlighted?: (row: InputT) => boolean;
    isRowMinored?: (row: InputT) => boolean;
    onRowClick?: (row: InputT) => void;
    optionCellStyle?: CSSProperties;
    buildOptionItems?: (data: InputT) => Array<optionItemType>;
    orderByProperty: string | undefined;
    orderDirection: orderDirectionType;
    pagination?: {
        start: number;
        end: number;
    };
}): JSX.Element;
