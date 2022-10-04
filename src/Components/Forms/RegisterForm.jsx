import { Button } from "@mui/material";
import { FormProvider } from "react-hook-form";
import TextFieldControl from "../../Controls/InputControls/TextFieldControl";
import strings from "../../localization";

const RegisterForm = ({form, control, onSubmit}) => {
    return <FormProvider {...form}>
        <form className="register-form">
            <TextFieldControl
                control={control}
                name="email"
                defaultValue=""
                fullWidth
                placeholder={strings.components.forms.registerForm.email}
                margin="normal" />
            <TextFieldControl
                control={control}
                name="username"
                defaultValue=""
                fullWidth
                placeholder={strings.components.forms.registerForm.username}
                margin="normal" />
            <TextFieldControl
                control={control}
                name="password"
                defaultValue=""
                fullWidth
                type="password"
                placeholder={strings.components.forms.registerForm.password}
                margin="normal" />
            <TextFieldControl
                control={control}
                name="repeatPassowrd"
                defaultValue=""
                type="password"
                fullWidth
                placeholder={strings.components.forms.registerForm.repeatPassword}
                margin="normal" />
            <Button onClick={onSubmit} className="submit-button">{strings.components.forms.registerForm.register}</Button>
        </form>
    </FormProvider>
}

export default RegisterForm;