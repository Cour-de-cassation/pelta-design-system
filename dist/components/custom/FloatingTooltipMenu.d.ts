import { ReactElement } from "react";
import { positionType } from "../../theme";
export { FloatingTooltipMenu };
declare function FloatingTooltipMenu(props: {
    children: ReactElement;
    shouldCloseWhenClickedAway: boolean;
    originPosition: positionType;
    onClose: () => void;
    width: number;
}): ReactElement;
