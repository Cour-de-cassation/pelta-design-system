import React, { MouseEvent, ReactElement } from "react";
export { DropdownButton };
declare function DropdownButton<T extends string>(props: {
    error?: boolean;
    isDisabled?: boolean;
    isOpen: boolean;
    item?: {
        icon?: ReactElement;
        text: string;
        value: T;
    };
    label: string;
    labelIcon?: ReactElement;
    onClick: (event: MouseEvent) => void;
    width?: number;
}): React.JSX.Element;
