export { TableOptionItemSelectionPopUp };
declare function TableOptionItemSelectionPopUp(props: {
    description: string;
    dropdownLabel: string;
    items: Array<string>;
    onSelect: (value: string) => void;
    onClose: () => void;
}): JSX.Element;
