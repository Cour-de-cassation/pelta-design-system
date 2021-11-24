/// <reference types="react" />
export { Snackbar };
export type { snackbarVariantType };
declare type snackbarVariantType = "success" | "alert" | "info";
declare function Snackbar(props: {
    variant: snackbarVariantType;
    text: string;
    isOpen: boolean;
    onClose: () => void;
    autoHide: boolean;
}): JSX.Element;
