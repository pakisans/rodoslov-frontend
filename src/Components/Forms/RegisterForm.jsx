import { Button } from "@mui/material";
import { useEffect } from "react";
import { FormProvider } from "react-hook-form";
import TextFieldControl from "../../Controls/InputControls/TextFieldControl";
import strings from "../../localization";

const RegisterForm = ({form, control, onSubmit, formRules, errors, errorMessage}) => {
    return <FormProvider {...form}>
        <form className="register-form">
            <TextFieldControl
                id="email-input"
                control={control}
                name="email"
                defaultValue=""
                fullWidth
                placeholder={strings.components.forms.registerForm.email}
                rules={formRules['email']}
                error={Boolean(errors.email)}
                helperText={errors.email && strings.pages.login.emailError}
                margin="normal" />
            <TextFieldControl
                id="firstname-input"
                control={control}
                name="firstName"
                defaultValue=""
                fullWidth
                placeholder={strings.components.forms.registerForm.firstName}
                rules={formRules['firstName']}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName && strings.pages.login.fieldRequired}
                margin="normal" />
            <TextFieldControl
                id="last-name-input"
                control={control}
                name="lastName"
                defaultValue=""
                fullWidth
                placeholder={strings.components.forms.registerForm.lastName}
                rules={formRules['lastName']}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName && strings.pages.login.fieldRequired}
                margin="normal" />
            <TextFieldControl
                id="password-input"
                control={control}
                name="password"
                defaultValue=""
                fullWidth
                type="password"
                error={Boolean(errors.password)}
                helperText={errors.password && strings.pages.login.passwordError}
                rules={formRules['password']}
                placeholder={strings.components.forms.registerForm.password}
                margin="normal" />
            <TextFieldControl
                id="repeat-password-input"
                control={control}
                name="repeatPassword"
                defaultValue=""
                type="password"
                error={Boolean(errors.requiredPassword || errors.repeatPassword)}
                helperText={(errors.requiredPassword && strings.pages.login.passwordError) || (errors.repeatPassword && errors.repeatPassword.message)}
                rules={formRules['password']}
                fullWidth
                placeholder={strings.components.forms.registerForm.repeatPassword}
                margin="normal" />
            {errorMessage && <span className="error-message">{errorMessage}</span>}
            <Button onClick={onSubmit} className="submit-button">{strings.components.forms.registerForm.register}</Button>
        </form>
    </FormProvider>
}

export default RegisterForm;