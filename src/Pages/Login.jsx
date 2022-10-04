import { useForm } from "react-hook-form";
import { login } from "../Base/OAuth";
import LoginForm from "../Components/Forms/LoginForm";
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
    const form = useForm();
    const { control, handleSubmit, formState: { errors } } = form;

    const onSubmit = (data) => {
        login(data.username, data.password).then(res => {
            if(!res || !res.ok){
                return;
            }
            console.log('Uspesno ste logovani')
        })

    }
    
    return <div className="login">
        <span className="title">{strings.pages.login.loginTitle}</span>
        <LoginForm formRules={formRules} errors={errors} onSubmit={handleSubmit(onSubmit)} form={form} control={control}/>
    </div>
}

export default Login;