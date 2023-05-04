"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.LoginForm = void 0;
const react_1 = __importStar(require("react"));
const wordings_1 = require("../../wordings");
const theme_1 = require("../../theme");
const materialUI_1 = require("../materialUI");
const ButtonWithIcon_1 = require("./ButtonWithIcon");
function LoginForm(props) {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [isFormValid, setIsFormValid] = (0, react_1.useState)(true);
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles(theme);
    return (react_1.default.createElement("form", { style: styles.formContainer, onSubmit: handleSubmit },
        react_1.default.createElement("div", { style: styles.inputContainer },
            react_1.default.createElement(materialUI_1.RichTextInput, { name: "email", type: "email", placeholder: wordings_1.wordings.loginForm.email, onChange: changeEmail, value: email, error: !isFormValid, style: styles.input })),
        react_1.default.createElement("div", { style: styles.inputContainer },
            react_1.default.createElement(materialUI_1.RichTextInput, { name: "password", type: "password", placeholder: wordings_1.wordings.loginForm.password, onChange: changePassword, value: password, error: !isFormValid, style: styles.input })),
        react_1.default.createElement("div", { style: styles.forgottenPasswordContainer },
            react_1.default.createElement(materialUI_1.Text, { style: styles.forgottenPasswordText, variant: "h3", color: "textPrimary" }, wordings_1.wordings.loginForm.forgottenPassword)),
        react_1.default.createElement("div", { style: styles.loginButtonContainer },
            react_1.default.createElement(ButtonWithIcon_1.ButtonWithIcon, { iconName: isFormValid ? 'login' : 'error', onClick: handleSubmit, color: isFormValid ? 'primary' : 'alert', text: wordings_1.wordings.loginForm.login, type: "submit" })),
        react_1.default.createElement("div", { style: styles.errorContainer }, !isFormValid && (react_1.default.createElement("div", { style: styles.invalidErrorContainer },
            react_1.default.createElement(materialUI_1.Text, { style: styles.formErrorText, variant: "h3" }, wordings_1.wordings.loginForm.wrongEmailOrPassword),
            react_1.default.createElement(materialUI_1.Text, { style: styles.formErrorText, variant: "h3" }, wordings_1.wordings.loginForm.pleaseTryAgain))))));
    function handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            try {
                yield props.handleSubmit({ email, password });
            }
            catch (error) {
                setIsFormValid(false);
                console.warn(error);
            }
        });
    }
    function resetIsFormValid() {
        if (!isFormValid) {
            setIsFormValid(true);
        }
    }
    function changeEmail(email) {
        resetIsFormValid();
        setEmail(email);
    }
    function changePassword(password) {
        resetIsFormValid();
        setPassword(password);
    }
}
exports.LoginForm = LoginForm;
function buildStyles(theme) {
    const MIN_WIDTH_FORM = 366;
    const ERROR_LINE_HEIGHT = 19;
    return {
        formContainer: {
            minWidth: MIN_WIDTH_FORM,
            padding: theme.spacing * 6,
            paddingBottom: theme.spacing * 3,
            borderRadius: theme.shape.borderRadius.m,
            boxShadow: theme.boxShadow.major.out,
        },
        inputContainer: {
            marginBottom: theme.spacing * 3,
        },
        input: {
            display: 'flex',
        },
        forgottenPasswordContainer: {
            marginBottom: theme.spacing * 3,
        },
        forgottenPasswordText: {
            color: theme.colors.disabled.color,
        },
        loginButtonContainer: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: theme.spacing,
        },
        formErrorText: {
            lineHeight: `${ERROR_LINE_HEIGHT}px`,
            textAlign: 'right',
        },
        errorContainer: {
            height: `${2 * ERROR_LINE_HEIGHT}px`,
        },
        invalidErrorContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
    };
}
//# sourceMappingURL=LoginForm.js.map