import React, { ChangeEvent, CSSProperties, ReactElement } from "react";
import { TextField } from "@material-ui/core";
import { customThemeType, useCustomTheme } from "../../theme";

export { RichTextInput };

function RichTextInput(props: {
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
}): ReactElement {
  const theme = useCustomTheme();

  return (
    <TextField
      id={props.name}
      error={props.error}
      helperText={props.error ? props.errorText : props.helperText}
      label={props.placeholder}
      multiline={props.multiline}
      onChange={onChange}
      rows={props.size}
      style={props.style}
      type={props.type}
      value={props.value}
      variant="outlined"
    />
  );

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    return props.onChange(event.target.value);
  }
}
