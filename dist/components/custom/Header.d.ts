import { ReactElement, CSSProperties } from "react";
export { Header };
declare function Header(props: {
    leftHeaderComponents: ReactElement[];
    rightHeaderComponents: ReactElement[];
    spaceBetweenComponents: number;
    style?: CSSProperties;
    variant: "classic" | "mainLeft" | "mainRight";
}): ReactElement;
