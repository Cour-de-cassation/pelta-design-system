import React, { ReactNode } from "react";
import { AppBar, PropTypes } from "@material-ui/core";
import { zIndices } from "./constants";
import { customThemeType, useCustomTheme } from "../../theme";

export { MenuBar };

function MenuBar(props: {
  children: ReactNode;
  color?: PropTypes.Color;
  isElevated: boolean;
}) {
  const theme = useCustomTheme();
  const styles = buildStyles(props.isElevated);
  return (
    <AppBar
      position="relative"
      style={styles.appBar}
      color={props.color}
    >
      {props.children}
    </AppBar>
  );

  function buildStyles(isElevated:boolean) {
    return {
      appBar: {
        zIndex: zIndices.menuBar,
        boxShadow: isElevated ? theme.boxShadow.major.out : "none",
      },
    };
  }
}
