import { MouseEvent, ReactElement, ReactNode } from "react";
export { Dropdown };
declare function Dropdown<T extends string>(props: {
    buildButton: (param: {
        isOpen: boolean;
        item?: {
            iconName?: string;
            text: string;
            value: T;
        };
        onClick: (event: MouseEvent) => void;
    }) => ReactNode;
    defaultValue?: T;
    items: Array<{
        icon?: ReactElement;
        text: string;
        value: T;
        isDisabled?: boolean;
    }>;
    onChange: (value: T) => void;
    onClose?: () => void;
    width?: number;
}): ReactElement;
