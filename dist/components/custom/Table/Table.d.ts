import { iconNameType } from "../../materialUI";
import { orderDirectionType } from "./TableHeader";
import { tableRowFieldType } from "./TableBody";
import { footerCellType } from "./TableFooter";
export { Table };
export type { optionItemType, orderDirectionType, tableRowFieldType };
type optionItemType = {
    kind: "text";
    text: string;
    onClick: () => void;
    iconName?: iconNameType;
    isDisabled?: boolean;
} | {
    kind: "selection";
    text: string;
    items: Array<string>;
    dropdownLabel: string;
    description: string;
    onSelect: (text: string) => Promise<void>;
    iconName?: iconNameType;
    isDisabled?: boolean;
};
declare function Table<InputT, orderByPropertyT extends string = string>(props: {
    defaultOrderByProperty?: orderByPropertyT;
    defaultOrderDirection?: orderDirectionType;
    footer?: Array<footerCellType>;
    isRowHighlighted?: (row: InputT) => boolean;
    isRowMinored?: (row: InputT) => boolean;
    data: InputT[];
    buildOptionItems?: (data: InputT) => Array<optionItemType>;
    onOrderByPropertyChange?: (newOrderByProperty: orderByPropertyT) => void;
    onOrderDirectionChange?: (newOrderDirection: orderDirectionType) => void;
    onRowClick?: (row: InputT) => void;
    pagination?: {
        start: number;
        end: number;
    };
    fields: Array<tableRowFieldType<InputT, orderByPropertyT>>;
}): JSX.Element;
