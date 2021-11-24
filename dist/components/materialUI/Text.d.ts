import { ReactElement, ReactNode, CSSProperties } from "react";
import { typographyType } from "../../theme";
export { Text };
declare function Text(props: {
    children: ReactNode;
    variant?: typographyType;
    weight?: "normal" | "bold";
    color?: "textPrimary" | "textSecondary";
    inline?: boolean;
    style?: CSSProperties;
}): ReactElement;
