/// <reference types="react" />
import { rectPositionType } from "../../../theme";
export { DatePickerTooltip };
export type { dateType };
declare type dateType = {
    year: number;
    month: number;
    dayOfMonth: number;
};
declare function DatePickerTooltip(props: {
    value: Date | undefined;
    computeIsDateAvailable: (date: dateType) => boolean;
    onChange: (value: dateType) => void;
    rectPosition: rectPositionType;
    onClose: () => void;
}): JSX.Element;
