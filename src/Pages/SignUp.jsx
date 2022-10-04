import { useForm } from "react-hook-form";
import RegisterForm from "../Components/Forms/RegisterForm";
import strings from "../localization";
import { registration } from "../Services/User/UserService";

const SignUp = () => {  
    const form = useForm();
    const { control, handleSubmit, formState: { errors } } = form;
    
    const onSubmit = (data) => {
        registration(data).then(res => {
            if(!res || !res.ok){
                return
            }
            console.log('prolazi')
        })
        console.log(data)
    }
    return <div className="sign-up">
        <span className="title">{strings.pages.registartion.registartionTitle}</span>
        <RegisterForm onSubmit={handleSubmit(onSubmit)} control={control}  />
    </div>
}

export default SignUp;