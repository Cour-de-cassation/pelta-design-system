import { CSSProperties, ReactElement, ReactNode, MouseEvent } from "react";
export { Button };
export type { buttonColorType };
declare type buttonColorType = "primary" | "warning" | "alert" | "default";
declare function Button(props: {
    children?: ReactNode;
    color?: buttonColorType;
    disabled?: boolean;
    disabledHover?: boolean;
    hint?: string;
    onClick?: (event: MouseEvent) => void;
    style?: CSSProperties;
    type?: "submit";
}): ReactElement;
