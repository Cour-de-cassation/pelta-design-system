import React, { ChangeEvent, ReactElement } from "react";
import { Switch as MUSwitch } from "@mui/material";
import { customThemeType, useCustomTheme } from "../../theme";

export { SwitchButton };

function SwitchButton(props: {
  checked: boolean;
  disabled?: boolean;
  color: "primary" | "secondary" | "default";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}): ReactElement {
  const theme = useCustomTheme();
  const classes = buildSwitchButtonClasses(theme);

  return (
    <MUSwitch
      disabled={props.disabled}
      checked={props.checked}
      sx={{ ...classes }}
      color={props.color}
      onChange={props.onChange}
    />
  );

  function buildSwitchButtonClasses(theme: customThemeType) {
    return {
      root: {
        width: 50,
        height: 30,
        padding: 0,
        borderRadius: theme.shape.borderRadius.m,
        border: "2px solid",
      },
      switchBase: {
        color: theme.colors.line.level1,
        position: "absolute",
        top: "-7px",
        left: "-7px",
        "&$checked": {
          color: theme.colors.line.level1,
        },
        "&$checked + $track": {
          backgroundColor: theme.colors.primary,
          opacity: 1,
        },
      },
      thumb: { height: 22, width: 22 },
      checked: {},
      track: {
        backgroundColor: theme.colors.background,
      },
    };
  }
}
