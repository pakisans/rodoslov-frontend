import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import SheetForm from "../../Components/Forms/SheetForm"
import DataManagmentMode from "../../Constants/DataManagmentMode";
import NotificationActionContext from "../../Context/NotificationActionWrapper";
import strings from "../../localization";
import { getFamilies } from "../../Services/Family/FamilyService";
import { editSheet } from "../../Services/Sheets/SheetsService";
import { setDataManagementTitle } from "../../Slices/DataManagementSlice";
import { setIsReadyForFetch } from "../../Slices/FetchSlice";
import { sheetFormRules } from "../../Utils/FormRulesUtil";

const EditSheet = ({setDataManagementMode, data}) => {
    const dispatch = useDispatch();
    const form = useForm({
        defaultValues: data && data.length > 0 ? data[0] : undefined
    });
    const {control, setValue, getValues, formState: {errors}, handleSubmit} = form;
    const [families, setFamilies] = useState([]);
    const {showNotification} = useContext(NotificationActionContext);

    useEffect(() => {
        dispatch(setDataManagementTitle(strings.pages.sheets.editSheet))
    });

    useEffect(() => {
        fetchFamilies();
    },[])

    const fetchFamilies = () => {
        getFamilies().then(res => {
            if(!res || !res.ok) return;
            setFamilies(res.data.result);
        })
    }

    const onSubmit = (data) => {
        editSheet(data).then(res => {
            if(!res||!res.ok){
                showNotification(strings.common.errorEditing, 'error');
                return;
            }
        }).finally(() => {
            setDataManagementMode(DataManagmentMode.VIEW);
            dispatch(setIsReadyForFetch());
            showNotification(strings.common.itemUpdated);
        })
    }

    return <SheetForm 
        control={control}
        setValue={setValue}
        values={getValues}
        errors={errors}
        formRules={sheetFormRules}
        form={form}
        families={families}
        onSubmit={handleSubmit(onSubmit)}
        onCancel={() =>  setDataManagementMode(DataManagmentMode.VIEW)}
    />
}

export default EditSheet;