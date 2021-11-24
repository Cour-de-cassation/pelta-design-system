import { ReactElement, MouseEvent } from "react";
import { iconNameType } from "../materialUI";
import { buttonColorType } from "./Button";
export { IconButton };
declare function IconButton(props: {
    buttonSize?: number;
    backgroundColor?: buttonColorType;
    color?: buttonColorType;
    disabled?: boolean;
    hint: string;
    iconName: iconNameType;
    onClick: (event: MouseEvent) => void;
    type?: "submit";
}): ReactElement;
