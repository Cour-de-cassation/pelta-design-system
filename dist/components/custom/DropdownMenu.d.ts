import { ReactElement } from "react";
export { DropdownMenu };
declare function DropdownMenu<T extends string>(props: {
    anchorElement: Element | undefined;
    dropdownPosition: "bottom" | "top";
    items: Array<{
        icon?: ReactElement;
        text: string;
        value: T;
        isDisabled?: boolean;
    }>;
    onChange: (value: T) => void;
    onClose: () => void;
    width?: number;
}): ReactElement;
