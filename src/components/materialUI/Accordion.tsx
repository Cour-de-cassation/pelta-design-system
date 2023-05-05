import React, { CSSProperties, ReactElement } from "react";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { customThemeType, useCustomTheme } from "../../theme";

export { Accordion };

function Accordion(props: {
  headerStyle?: CSSProperties;
  header: ReactElement;
  body: ReactElement;
  onChange: (expanded: boolean) => void;
  style?: CSSProperties;
}): ReactElement {
  const theme = useCustomTheme();

  return (
    <MuiAccordion
      onChange={(_event, expanded) => props.onChange(expanded)}
      style={props.style}
    >
      <AccordionSummary style={props.headerStyle}>
        {props.header}
      </AccordionSummary>
      <AccordionDetails>{props.body}</AccordionDetails>
    </MuiAccordion>
  );
}