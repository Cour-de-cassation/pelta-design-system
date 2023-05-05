import React, { ChangeEvent, ReactElement } from "react";
import { Switch as MUSwitch } from "@material-ui/core";
import { customThemeType, useCustomTheme } from "../../theme";

export { SwitchButton };

function SwitchButton(props: {
  checked: boolean;
  disabled?: boolean;
  color: "primary" | "secondary" | "default";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}): ReactElement {
  const theme = useCustomTheme();

  return (
    <MUSwitch
      disabled={props.disabled}
      checked={props.checked}
      color={props.color}
      onChange={props.onChange}
    />
  );
}
