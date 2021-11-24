import { ChangeEvent, ReactElement } from "react";
export { SwitchButton };
declare function SwitchButton(props: {
    checked: boolean;
    disabled?: boolean;
    color: "primary" | "secondary" | "default";
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}): ReactElement;
