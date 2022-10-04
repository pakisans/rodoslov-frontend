import { Button } from "@mui/material";
import { FormProvider } from "react-hook-form";
import TextFieldControl from "../../Controls/InputControls/TextFieldControl";
import strings from "../../localization"

const LoginForm = ({form,control, onSubmit, formRules, errors}) => {
    return <FormProvider {...form}>
        <form className="login-form" onSubmit={onSubmit}>
            <TextFieldControl
                        control={control}
                        name="username"
                        defaultValue=""
                        rules={formRules['email']}
                        error={Boolean(errors.username)}
                        fullWidth
                        placeholder={strings.components.forms.loginForm.username}
                        margin="normal"
                        helperText={errors.username && strings.pages.login.emailError}
                        />
             <TextFieldControl
                        control={control}
                        name="password"
                        defaultValue=""
                        fullWidth
                        margin="normal"
                        placeholder={strings.components.forms.loginForm.password}
                        error={Boolean(errors.password)}
                        helperText={errors.password && strings.pages.login.passwordError}
                        rules={formRules['password']}
                        type={'password'} />

            <Button onClick={onSubmit} className="submit-button">{strings.components.forms.loginForm.login}</Button>
        </form>
    </FormProvider>
}

export default LoginForm;