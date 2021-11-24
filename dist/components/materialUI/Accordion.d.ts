import { CSSProperties, ReactElement } from "react";
export { Accordion };
declare function Accordion(props: {
    headerStyle?: CSSProperties;
    header: ReactElement;
    body: ReactElement;
    onChange: (expanded: boolean) => void;
    style?: CSSProperties;
}): ReactElement;
