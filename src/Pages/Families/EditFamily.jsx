import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import FamilyForm from "../../Components/Forms/FamilyForm";
import DataManagmentMode from "../../Constants/DataManagmentMode";
import strings from "../../localization";
import { editFamiliy } from "../../Services/Family/FamilyService";
import { setDataManagementTitle } from "../../Slices/DataManagementSlice";
import { setIsReadyForFetch } from "../../Slices/FetchSlice";
import { familyFormRules } from "../../Utils/FormRulesUtil";

const EditFamily = (props) => {
    const form = useForm({
        defaultValues: props.data && props.data.length > 0 ? props.data[0] : undefined
    });
    const {handleSubmit, control, formState: {errors}} = form;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDataManagementTitle(strings.pages.family.editFamily))
    },[])

    const onFinish = () => {
        props.setDataManagementMode(DataManagmentMode.VIEW)
    }

    const onSubmit = (data) => {
        editFamiliy(data).then(res => {
            if(!res||!res.ok) return;
        })
        .finally(() => {
            onFinish();
            dispatch(setIsReadyForFetch());
        })

    }

    return <FamilyForm errors={errors} onCancel={onFinish} form={form} control={control} formRules={familyFormRules} onSubmit={handleSubmit(onSubmit)} />
}

export default EditFamily;