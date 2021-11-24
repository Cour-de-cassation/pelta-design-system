import { CSSProperties } from "react";
import { optionItemType, tableRowFieldType } from "./Table";
export { TableRow };
declare function TableRow<InputT>(props: {
    fields: Array<tableRowFieldType<InputT>>;
    row: InputT;
    isHighlighted: boolean;
    isMinored: boolean;
    onRowClick?: () => void;
    buildOptionItems?: (data: InputT) => Array<optionItemType>;
    optionCellStyle?: CSSProperties;
}): JSX.Element;
