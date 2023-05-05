import { rectPositionType } from "../../../theme";
export { DatePickerTooltip };
export type { dateType };
type dateType = {
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
