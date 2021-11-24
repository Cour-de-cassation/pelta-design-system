import React, { CSSProperties, ReactElement } from "react";
export { RichTextInput };
declare function RichTextInput(props: {
    name: string;
    placeholder?: string;
    value: string;
    error?: boolean;
    errorText?: string;
    helperText?: string;
    multiline?: boolean;
    onChange: (value: string) => void;
    size?: number;
    style?: CSSProperties;
    type?: React.InputHTMLAttributes<unknown>["type"];
    width?: number;
}): ReactElement;
