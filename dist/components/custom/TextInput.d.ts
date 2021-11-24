import { ReactElement } from "react";
export { TextInput };
declare function TextInput(props: {
    name: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
}): ReactElement;
