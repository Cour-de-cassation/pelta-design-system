import React, { ReactElement } from "react";
export { TableFooter };
export type { footerCellType };
type footerCellType = {
    id: string;
    content: ReactElement;
};
declare function TableFooter(props: {
    cells: Array<footerCellType>;
}): React.JSX.Element;
