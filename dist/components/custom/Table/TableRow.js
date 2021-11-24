"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = void 0;
const react_1 = __importStar(require("react"));
const theme_1 = require("../../../theme");
const materialUI_1 = require("../../materialUI");
const OptionButton_1 = require("./OptionButton");
const TableOptionItemSelectionPopUp_1 = require("./TableOptionItemSelectionPopUp");
const ROW_DEFAULT_HEIGHT = 50;
function TableRow(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const [optionItemSelection, setOptionItemSelection] = (0, react_1.useState)();
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    const styles = buildStyles(theme);
    const cellWeight = props.isHighlighted ? "bold" : "normal";
    const cellColor = props.isMinored ? "textSecondary" : "textPrimary";
    const formattedRow = props.fields.map((field) => ({
        style: field.cellStyle,
        content: field.render ? (field.render(props.row)) : (react_1.default.createElement(materialUI_1.Text, { variant: "h3" }, field.extractor(props.row))),
    }));
    const { onRowClick } = props;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !!optionItemSelection && (react_1.default.createElement(TableOptionItemSelectionPopUp_1.TableOptionItemSelectionPopUp, { dropdownLabel: optionItemSelection.dropdownLabel, description: optionItemSelection.description, items: optionItemSelection.items, onSelect: optionItemSelection.onSelect, onClose: () => setOptionItemSelection(undefined) })),
        react_1.default.createElement("tr", { onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), onClick: !!onRowClick ? onRowClick : undefined, style: styles.row },
            formattedRow.map(({ content, style }) => (react_1.default.createElement("td", { style: style },
                react_1.default.createElement(materialUI_1.Text, { weight: cellWeight, color: cellColor, variant: "h3" }, content)))),
            react_1.default.createElement("td", { style: props.optionCellStyle }, renderOptionButton()))));
    function renderOptionButton() {
        const { buildOptionItems } = props;
        if (!buildOptionItems || !isHovered) {
            return null;
        }
        const optionItems = buildOptionItems(props.row);
        if (optionItems.length === 0) {
            return null;
        }
        const items = optionItems.map((optionItem) => ({
            text: optionItem.text,
            value: optionItem.text,
            isDisabled: optionItem.isDisabled,
            icon: optionItem.iconName ? (react_1.default.createElement(materialUI_1.Icon, { iconName: optionItem.iconName })) : undefined,
        }));
        const onSelect = (optionItemText) => {
            const optionItem = optionItems.find(({ text }) => text === optionItemText);
            if (!optionItem) {
                return;
            }
            switch (optionItem.kind) {
                case "text":
                    optionItem.onClick();
                    return;
                case "selection":
                    setOptionItemSelection({
                        description: optionItem.description,
                        items: optionItem.items,
                        dropdownLabel: optionItem.dropdownLabel,
                        onSelect: buildOptionItemOnSelect(optionItem.onSelect),
                    });
                    return;
            }
        };
        return (react_1.default.createElement(OptionButton_1.OptionButton, { items: items, onClose: () => setIsHovered(false), onSelect: onSelect }));
    }
    function buildOptionItemOnSelect(onSelect) {
        return (text) => __awaiter(this, void 0, void 0, function* () {
            yield onSelect(text);
            setOptionItemSelection(undefined);
        });
    }
    function buildStyles(theme) {
        const cursor = !!props.onRowClick ? "pointer" : "default";
        const backgroundColor = isHovered
            ? theme.colors.default.background
            : undefined;
        return {
            row: {
                cursor,
                backgroundColor,
                height: `${ROW_DEFAULT_HEIGHT}px`,
            },
        };
    }
}
exports.TableRow = TableRow;
//# sourceMappingURL=TableRow.js.map