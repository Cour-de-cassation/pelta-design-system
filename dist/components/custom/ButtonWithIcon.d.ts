import { CSSProperties, ReactElement, MouseEvent } from "react";
import { iconNameType } from "../materialUI";
import { buttonColorType } from "./Button";
export { ButtonWithIcon };
declare function ButtonWithIcon(props: {
    color?: buttonColorType;
    disabled?: boolean;
    iconName: iconNameType;
    isLoading?: boolean;
    onClick?: (event: MouseEvent) => void;
    style?: CSSProperties;
    text: string;
    type?: "submit";
}): ReactElement;
