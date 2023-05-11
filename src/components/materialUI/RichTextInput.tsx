import React, { ChangeEvent, CSSProperties, ReactElement } from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
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
  const inputClasses = buildInputClasses(theme);

  return (
    <TextField
      id={props.name}
      InputProps={{ classes: inputClasses }}
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
  function buildInputClasses(theme: customThemeType) {
    return makeStyles({
      notchedOutline: {
        borderWidth: 2,
        borderColor: theme.colors.line.level2,
      },
      root: { width: props.width },
    })();
  }
}
