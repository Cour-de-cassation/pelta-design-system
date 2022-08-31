"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const react_1 = __importDefault(require("react"));
const icons_1 = require("@material-ui/icons");
const Tooltip_1 = require("../Tooltip");
const svgIcons_1 = require("./svgIcons");
const materialIconMapping = {
    addPerson: icons_1.PersonAddRounded,
    admin: icons_1.SupervisorAccountRounded,
    arrowDown: icons_1.ExpandMoreRounded,
    arrowLeft: icons_1.ChevronLeftRounded,
    arrowRight: icons_1.ChevronRightRounded,
    arrowUp: icons_1.ExpandLessRounded,
    assigned: icons_1.HowToRegRounded,
    assignment: icons_1.AssignmentIndRounded,
    bank: icons_1.AccountBalanceRounded,
    book: icons_1.BookRounded,
    bug: icons_1.BugReportRounded,
    cake: icons_1.CakeRounded,
    car: icons_1.DirectionsCarRounded,
    check: icons_1.DoneRounded,
    checkBox: icons_1.CheckBoxRounded,
    child: icons_1.ChildCareRounded,
    city: icons_1.LocationCityRounded,
    clock: icons_1.AlarmOnRounded,
    close: icons_1.CloseRounded,
    cloud: icons_1.CloudRounded,
    copy: icons_1.FileCopyOutlined,
    delete: icons_1.DeleteRounded,
    deleteOutline: icons_1.DeleteOutlineRounded,
    discussion: icons_1.QuestionAnswerRounded,
    doubleArrow: icons_1.SettingsEthernetRounded,
    doubleCheck: icons_1.DoneAllRounded,
    edit: icons_1.EditRounded,
    edited: icons_1.BorderColorRounded,
    email: icons_1.EmailRounded,
    error: icons_1.ErrorRounded,
    eye: icons_1.VisibilityRounded,
    export: icons_1.GetAppRounded,
    find: icons_1.FindInPageRounded,
    forbidden: icons_1.BlockRounded,
    heart: icons_1.FavoriteRounded,
    help: icons_1.HelpOutline,
    home: icons_1.HomeRounded,
    human: icons_1.AccessibilityNewRounded,
    key: icons_1.VpnKeyRounded,
    location: icons_1.RoomRounded,
    lightBulb: icons_1.EmojiObjectsRounded,
    link: icons_1.Link,
    lock: icons_1.LockRounded,
    login: icons_1.ExitToAppRounded,
    logout: icons_1.PowerSettingsNewRounded,
    mail: icons_1.MailRounded,
    map: icons_1.MapRounded,
    minus: icons_1.RemoveCircleRounded,
    moreHoriz: icons_1.MoreHorizRounded,
    moreVert: icons_1.MoreVertRounded,
    pencil: icons_1.EditRounded,
    person: icons_1.PersonRounded,
    phone: icons_1.PhoneRounded,
    playlistPlay: icons_1.PlaylistPlayRounded,
    playlistCheck: icons_1.PlaylistAddCheckRounded,
    plus: icons_1.AddCircleRounded,
    publish: icons_1.PublishRounded,
    puzzle: icons_1.ExtensionRounded,
    redo: icons_1.RedoRounded,
    restore: icons_1.RestorePageRounded,
    reset: icons_1.LoopRounded,
    search: icons_1.SearchRounded,
    send: icons_1.SendRounded,
    settings: icons_1.SettingsRounded,
    statistics: icons_1.BarChart,
    stop: icons_1.BlockRounded,
    store: icons_1.StoreRounded,
    turnRight: icons_1.SubdirectoryArrowRightRounded,
    undo: icons_1.UndoRounded,
    unlink: icons_1.LinkOff,
    unlock: icons_1.LockOpenRounded,
    update: icons_1.UpdateRounded,
    waiting: icons_1.HourglassEmptyRounded,
    warning: icons_1.ReportProblemRounded,
    web: icons_1.PublicRounded,
    work: icons_1.BusinessCenterRounded,
};
const svgIconMapping = {
    judge: svgIcons_1.Judge,
    meditation: svgIcons_1.Meditation,
    scissors: svgIcons_1.Scissors,
};
const iconMapping = Object.assign(Object.assign({}, materialIconMapping), svgIconMapping);
function Icon(props) {
    const IconComponent = iconMapping[props.iconName];
    if (props.hint) {
        return (react_1.default.createElement(Tooltip_1.Tooltip, { title: props.hint },
            react_1.default.createElement(IconComponent, { style: props.style })));
    }
    return react_1.default.createElement(IconComponent, { style: props.style });
}
exports.Icon = Icon;
//# sourceMappingURL=Icon.js.map