import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../Components/Forms/RegisterForm";
import BackendMessages from "../Constants/BackendMessages";
import ValidationPatters from "../Constants/ValidationPatters";
import strings from "../localization";
import { registration } from "../Services/User/UserService";

const formRules = {
    'email': {
        required: { value: true, message: strings.pages.login.fieldRequired },
        pattern: { value: ValidationPatters.EMAIL, message: strings.pages.login.emailError }
    },
    'password': { required: { value: true, message: strings.pages.login.fieldRequired } },
    'requiredPassword': { required: { value: true, message: strings.pages.login.fieldRequired } }
}

const SignUp = () => {  
    const form = useForm();
    const { control, handleSubmit, formState: { errors }, setError, clearErrors } = form;
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        clearErrors();
        if(data.password != data.repeatPassword){
            setError('repeatPassword', { message: strings.components.forms.registerForm.repeatPasswordError});
            return;
        }
        registration(data).then(res => {
            if(!res || !res.ok){
                if(res.response.data.message == BackendMessages.USER_EXIST){
                    setErrorMessage(strings.components.forms.registerForm.userExist);
                }
                return;
            }
            setErrorMessage(false);
            navigate('/login', {state: {successRegister:true}})
        })
    }
    return <div className="sign-up">
        <span className="title">{strings.pages.registartion.registartionTitle}</span>
        <RegisterForm errorMessage={errorMessage} errors={errors} formRules={formRules} onSubmit={handleSubmit(onSubmit)} control={control}  />
    </div>
}

export default SignUp;