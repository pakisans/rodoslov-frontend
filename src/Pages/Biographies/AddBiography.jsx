import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import BiographyForm from "../../Components/Forms/BiographyForm"
import DataManagmentMode from "../../Constants/DataManagmentMode";
import strings from "../../localization";
import { addBiography } from "../../Services/Biography/BiographyService";
import { getAllSheets } from "../../Services/Sheets/SheetsService";
import { setDataManagementTitle } from "../../Slices/DataManagementSlice";
import { setIsReadyForFetch } from "../../Slices/FetchSlice";
import { biographyRules } from "../../Utils/FormRulesUtil";

const AddBioraphy = ({setDataManagementMode}) => {
    const form = useForm();
    const {handleSubmit, setValue, getValues, control, formState: {errors}} = form;
    const dispatch = useDispatch();
    const [sheets, setSheets] = useState([]);

    useEffect(() => {
        dispatch(setDataManagementTitle(strings.pages.biography.addBiography));
        fetchSheets();
    },[])
    

    const fetchSheets = () => {
        getAllSheets().then(res => {
            if(!res || !res.ok)return;

            setSheets(res.data.result);
        })
    }

    const onSubmit = (data) => {
        addBiography(data).then(res => {
            if(!res || !res.ok) return;
        })
        .finally(() => {
            setDataManagementMode(DataManagmentMode.VIEW);
            dispatch(setIsReadyForFetch());
        })
    }

    return <BiographyForm
                control={control}
                form={form}
                setValue={setValue}
                sheets={sheets}
                values={getValues} 
                onCancel={() => setDataManagementMode(DataManagmentMode.VIEW)} 
                formRules={biographyRules} 
                onSubmit={handleSubmit(onSubmit)} 
                errors={errors} />
}

export default AddBioraphy;