import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import BiographyForm from "../../Components/Forms/BiographyForm"
import DataManagmentMode from "../../Constants/DataManagmentMode";
import NotificationActionContext from "../../Context/NotificationActionWrapper";
import strings from "../../localization";
import { editBiography } from "../../Services/Biography/BiographyService";
import { getAllSheets } from "../../Services/Sheets/SheetsService";
import { setDataManagementTitle } from "../../Slices/DataManagementSlice";
import { setIsReadyForFetch } from "../../Slices/FetchSlice";
import { biographyRules } from "../../Utils/FormRulesUtil";

const EditBioraphy = (props) => {
    const [sheets, setSheets] = useState([]);
    const form = useForm({
        defaultValues: props.data && props.data.length > 0 ? {...props.data[0], sheet: props.data[0].sheets} : undefined
    });
    const {handleSubmit, getValues, setValue, control, formState: {errors}} = form;
    const dispatch = useDispatch();
    const {showNotification} = useContext(NotificationActionContext);

    useEffect(() => {
        dispatch(setDataManagementTitle(strings.pages.biography.editBiography));
        fetchSheets();
    },[])

    const onFinish = () => {
        props.setDataManagementMode(DataManagmentMode.VIEW)
    }


    const fetchSheets = () => {
        getAllSheets().then(res => {
            if(!res || !res.ok)return;

            setSheets(res.data.result);
        })
    }

    const onSubmit = (data) => {
        editBiography(data).then(res => {
            if(!res||!res.ok){
                showNotification(strings.common.errorEditing, 'error');
                return;
            }
        })
        .finally(() => {
            onFinish();
            dispatch(setIsReadyForFetch());
            showNotification(strings.common.itemUpdated);
        })

    }

    return <BiographyForm sheets={sheets} values={getValues} setValue={setValue} errors={errors} onCancel={onFinish} form={form} control={control} formRules={biographyRules} onSubmit={handleSubmit(onSubmit)} />
}

export default EditBioraphy;