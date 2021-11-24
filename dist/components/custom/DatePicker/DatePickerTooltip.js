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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerTooltip = void 0;
const react_1 = __importStar(require("react"));
const lodash_1 = require("lodash");
const theme_1 = require("../../../theme");
const materialUI_1 = require("../../materialUI");
const TooltipMenu_1 = require("../TooltipMenu");
const lib_1 = require("./lib");
const createCalendarTable_1 = require("./lib/createCalendarTable");
const wordings_1 = require("../../../wordings");
const TOOLTIP_WIDTH = 300;
const dayOfTheWeekKeys = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
];
function DatePickerTooltip(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles(theme);
    const now = new Date();
    const [currentDate, setCurrentDate] = (0, react_1.useState)(props.value || new Date(now.getFullYear(), now.getMonth(), now.getDate()));
    return (react_1.default.createElement(TooltipMenu_1.TooltipMenu, { rectPosition: props.rectPosition, shouldCloseWhenClickedAway: true, onClose: props.onClose, width: TOOLTIP_WIDTH },
        react_1.default.createElement("div", { style: styles.tooltipContent },
            react_1.default.createElement("div", { style: styles.header },
                react_1.default.createElement("div", { style: styles.arrowContainer, onClick: () => setCurrentDate((0, lib_1.getPreviousMonthDate)(currentDate)) },
                    react_1.default.createElement(materialUI_1.Icon, { iconName: "arrowLeft" })),
                react_1.default.createElement(materialUI_1.Text, null,
                    (0, lib_1.getMonthFromDate)(currentDate),
                    "/",
                    currentDate.getFullYear()),
                react_1.default.createElement("div", { style: styles.arrowContainer, onClick: () => setCurrentDate((0, lib_1.getNextMonthDate)(currentDate)) },
                    react_1.default.createElement(materialUI_1.Icon, { iconName: "arrowRight" }))),
            react_1.default.createElement("table", { style: styles.daysTable },
                react_1.default.createElement("tr", null, (0, lodash_1.range)(7).map((day) => (react_1.default.createElement("td", { key: day },
                    react_1.default.createElement(materialUI_1.Text, null, wordings_1.wordings.daysOfWeek[dayOfTheWeekKeys[day]]))))),
                renderCalendar(currentDate.getFullYear(), currentDate.getMonth())))));
    function renderCalendar(year, month) {
        const calendarTable = (0, createCalendarTable_1.createCalendarTable)(year, month);
        const calendar = calendarTable.map((week) => (react_1.default.createElement("tr", null, week.map((dayOfMonth) => {
            if (dayOfMonth === undefined) {
                return react_1.default.createElement("td", null);
            }
            const isDateAvailable = props.computeIsDateAvailable({
                year,
                month,
                dayOfMonth,
            });
            return (react_1.default.createElement("td", null,
                react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles.dayContainer), (isDateAvailable
                        ? undefined
                        : styles.unavailableDayContainer)), onClick: isDateAvailable
                        ? () => changeDate({ year, month, dayOfMonth })
                        : undefined },
                    react_1.default.createElement(materialUI_1.Text, null, dayOfMonth))));
        }))));
        return calendar;
    }
    function changeDate(date) {
        props.onChange(date);
        props.onClose();
    }
}
exports.DatePickerTooltip = DatePickerTooltip;
function buildStyles(theme) {
    return {
        header: {
            display: "flex",
            justifyContent: "space-between",
        },
        arrowContainer: {
            cursor: "pointer",
        },
        tooltipContent: {
            display: "flex",
            flexDirection: "column",
        },
        daysTable: { width: "100%" },
        dayContainer: {
            cursor: "pointer",
        },
        unavailableDayContainer: {
            color: theme.colors.disabled.color,
            cursor: "default",
        },
    };
}
//# sourceMappingURL=DatePickerTooltip.js.map