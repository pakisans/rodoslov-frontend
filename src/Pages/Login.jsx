import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { login } from "../Base/OAuth";
import LoginForm from "../Components/Forms/LoginForm";
import BackendMessages from "../Constants/BackendMessages";
import ValidationPatters from "../Constants/ValidationPatters";
import strings from "../localization";

const formRules = {
    'email': {
        required: { value: true, message: strings.pages.login.fieldRequired },
        pattern: { value: ValidationPatters.EMAIL, message: strings.pages.login.emailError }
    },
    'password': { required: { value: true, message: strings.pages.login.fieldRequired } },
}

const Login = () => {
    const location = useLocation();
    //TO:DO
    const form = useForm();
    const { control, handleSubmit, formState: { errors } } = form;
    const [errorMessage, setErrorMessage] = useState(false);

    const onSubmit = (data) => {
        login(data.username, data.password).then(res => {
            setErrorMessage(false);
            if(!res || !res.ok){
                if(res.response.data.message == BackendMessages.INVALID_CREDENTIALS){
                    setErrorMessage(strings.components.forms.loginForm.invalidCreds);
                }
                return;
            }
            //TO:DO
        })
    }
    
    return <div className="login">
        <span className="title">{strings.pages.login.loginTitle}</span>
        <LoginForm errorMessage={errorMessage} formRules={formRules} errors={errors} onSubmit={handleSubmit(onSubmit)} form={form} control={control}/>
    </div>
}

export default Login;