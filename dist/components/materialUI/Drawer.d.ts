import { ReactNode } from "react";
export { Drawer };
declare function Drawer(props: {
    children?: ReactNode;
    subtitle?: string;
    title: string;
    isOpen: boolean;
    onClose: () => void;
}): JSX.Element;
