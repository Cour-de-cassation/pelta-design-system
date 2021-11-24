import { MouseEvent, ReactElement, ReactNode } from "react";
export { Menu };
declare function Menu<T extends string>(props: {
    anchorElement: Element | undefined;
    dropdownPosition: "bottom" | "top";
    items: Array<{
        value: T;
        element: ReactNode;
        isDisabled?: boolean;
    }>;
    onChange: (value: T) => void;
    onClose: (event: MouseEvent) => void;
    width?: number;
}): ReactElement;
