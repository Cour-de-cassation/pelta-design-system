import React from "react";
import { rectPositionType } from "../../../theme";
import { dateType } from "./DatePickerTooltip";
export { DatePicker };
declare function DatePicker(props: {
    isDisabled?: boolean;
    computeIsDateAvailable: (date: dateType) => boolean;
    onChange: (date: dateType) => void;
    value: Date | undefined;
    label: string;
    width?: number;
    parentRectPosition?: rectPositionType;
}): React.JSX.Element;
