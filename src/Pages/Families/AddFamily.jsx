import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import FamilyForm from "../../Components/Forms/FamilyForm";
import DataManagmentMode from "../../Constants/DataManagmentMode";
import NotificationActionContext from "../../Context/NotificationActionWrapper";
import strings from "../../localization";
import { addFamilies } from "../../Services/Family/FamilyService";
import { setDataManagementTitle } from "../../Slices/DataManagementSlice";
import { setIsReadyForFetch } from "../../Slices/FetchSlice";
import { familyFormRules } from "../../Utils/FormRulesUtil";

const AddFamily = (props) => {
    const form = useForm();
    const {handleSubmit, control, formState: {errors}} = form;
    const dispatch = useDispatch();
    const {showNotification} = useContext(NotificationActionContext);

    useEffect(() => {
        dispatch(setDataManagementTitle(strings.pages.family.addFamily));
    })

    const onSubmit = (data) => {
        let shouldExecuteFinally = true;

        addFamilies(data)
            .then(res => {
                if (!res.ok) {
                    shouldExecuteFinally = false;
                    showNotification(strings.common.errorAdding, 'error');
                    return;
                }
            })
            .finally(() => {
                if (shouldExecuteFinally) {
                    props.setDataManagementMode(DataManagmentMode.VIEW);
                    dispatch(setIsReadyForFetch());
                    showNotification(strings.common.itemAdded);
                }
            });
    }

    return <FamilyForm onCancel={() => props.setDataManagementMode(DataManagmentMode.VIEW)} control={control} formRules={familyFormRules} onSubmit={handleSubmit(onSubmit)} errors={errors} />

}

export default AddFamily;