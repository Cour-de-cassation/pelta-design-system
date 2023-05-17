import React, { ReactElement } from "react";
import { rectPositionType } from "../../theme";
export { TooltipMenu };
declare function TooltipMenu(props: {
    children: ReactElement;
    onClose: () => void;
    shouldCloseWhenClickedAway: boolean;
    rectPosition: rectPositionType;
    width: number;
}): React.JSX.Element;
