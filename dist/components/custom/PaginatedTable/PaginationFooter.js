"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationFooter = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const materialUI_1 = require("../../materialUI");
const theme_1 = require("../../../theme");
const lib_1 = require("./lib");
const HEIGHT = 68;
const PAGE_SIZE = 30;
function PaginationFooter(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles(theme);
    const displayedPages = (0, lib_1.computeDisplayedPages)(props.currentPage, props.numberOfPages);
    const { ClickableDiv } = buildStyledComponents();
    return (react_1.default.createElement("div", { style: styles.container },
        react_1.default.createElement("div", { style: styles.pagesContainer },
            react_1.default.createElement(ClickableDiv, { onClick: () => props.currentPage > 0
                    ? props.setCurrentPage(props.currentPage - 1)
                    : null },
                react_1.default.createElement(materialUI_1.Icon, { iconName: "arrowLeft" })),
            displayedPages.map(renderContent),
            react_1.default.createElement(ClickableDiv, { onClick: () => props.currentPage < props.numberOfPages - 1
                    ? props.setCurrentPage(props.currentPage + 1)
                    : null },
                react_1.default.createElement(materialUI_1.Icon, { iconName: "arrowRight" })))));
    function renderContent(content) {
        switch (content.kind) {
            case "page":
                return (react_1.default.createElement(ClickableDiv, { isSelected: props.currentPage === content.value, onClick: () => props.setCurrentPage(content.value) },
                    react_1.default.createElement(materialUI_1.Text, { variant: "h3" }, content.value + 1)));
            case "blank":
                return (react_1.default.createElement("div", { style: styles.blank },
                    react_1.default.createElement(materialUI_1.Text, { variant: "h3" }, "...")));
        }
    }
    function buildStyledComponents() {
        const ClickableDiv = styled_components_1.default.div `
      ${({ isSelected }) => {
            return `
      width: ${PAGE_SIZE}px;
      height: ${PAGE_SIZE}px;
      border-radius: ${PAGE_SIZE / 2}px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: ${theme.spacing}px;
      ${isSelected
                ? `
          background-color: ${theme.colors.default.hoveredBackground};
          color: ${theme.colors.default.hoveredTextColor};
        `
                : `
      &:hover {
        background-color: ${theme.colors.default.background};
      }
      `}
    }
    `;
        }}
    `;
        return { ClickableDiv };
    }
}
exports.PaginationFooter = PaginationFooter;
function buildStyles(theme) {
    return {
        container: {
            height: `${HEIGHT}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        pagesContainer: {
            display: "flex",
            alignItems: "center",
        },
        blank: {
            marginRight: theme.spacing,
        },
    };
}
//# sourceMappingURL=PaginationFooter.js.map