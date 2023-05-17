import React from 'react';
export { LoginForm };
declare function LoginForm(props: {
    handleSubmit: ({ email, password }: {
        email: string;
        password: string;
    }) => Promise<void>;
}): React.JSX.Element;
