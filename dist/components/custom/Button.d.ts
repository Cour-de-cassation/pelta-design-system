import { CSSProperties, ReactElement, ReactNode, MouseEvent } from "react";
export { Button };
export type { buttonColorType };
type buttonColorType = "primary" | "warning" | "alert" | "default" | "success";
declare function Button(props: {
    children?: ReactNode;
    color?: buttonColorType;
    disabled?: boolean;
    disabledHover?: boolean;
    height?: number;
    hint?: string;
    onClick?: (event: MouseEvent) => void;
    style?: CSSProperties;
    type?: "submit";
}): ReactElement;
