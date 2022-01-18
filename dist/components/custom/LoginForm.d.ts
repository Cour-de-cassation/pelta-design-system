/// <reference types="react" />
export { LoginForm };
declare function LoginForm(props: {
    handleSubmit: ({ email, password }: {
        email: string;
        password: string;
    }) => Promise<void>;
}): JSX.Element;
