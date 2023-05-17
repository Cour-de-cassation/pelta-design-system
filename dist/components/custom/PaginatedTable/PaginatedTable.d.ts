import React from "react";
import { optionItemType, tableRowFieldType } from "../Table";
import { footerCellType } from "../Table/TableFooter";
import { orderDirectionType } from "../Table/TableHeader";
export { PaginatedTable };
declare function PaginatedTable<InputT, orderByPropertyT extends string = string>(props: {
    defaultOrderByProperty?: orderByPropertyT;
    defaultOrderDirection?: orderDirectionType;
    footer?: Array<footerCellType>;
    data: InputT[];
    onOrderByPropertyChange?: (newOrderByProperty: orderByPropertyT) => void;
    onOrderDirectionChange?: (newOrderDirection: orderDirectionType) => void;
    buildOptionItems?: (data: InputT) => Array<optionItemType>;
    fields: Array<tableRowFieldType<InputT, orderByPropertyT>>;
}): React.JSX.Element;
