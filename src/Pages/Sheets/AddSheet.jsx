import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import SheetForm from "../../Components/Forms/SheetForm"
import DataManagmentMode from "../../Constants/DataManagmentMode";
import strings from "../../localization";
import { getFamilies } from "../../Services/Family/FamilyService";
import { addSheet } from "../../Services/Sheets/SheetsService";
import { setDataManagementTitle } from "../../Slices/DataManagementSlice";
import { setIsReadyForFetch } from "../../Slices/FetchSlice";
import { sheetFormRules } from "../../Utils/FormRulesUtil";

const AddSheet = ({setDataManagementMode}) => {
    const form = useForm();
    const {handleSubmit, setValue, getValues, control, formState: {errors}} = form;
    const dispatch = useDispatch();
    const [families, setFamilies] = useState([]);

    useEffect(() => {
        dispatch(setDataManagementTitle(strings.pages.sheets.addSheet))
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
        addSheet(data).then(res => {
            if(!res || !res.ok) return;
        }).finally(() => {
            //TO:DO save and close
            dispatch(setIsReadyForFetch());
        });
    }

    return <SheetForm
                setValue={setValue}
                form={form}
                values={getValues}
                families={families}
                formRules={sheetFormRules}
                control={control}
                errors={errors}
                onSubmit={handleSubmit(onSubmit)} 
                onCancel={() => setDataManagementMode(DataManagmentMode.VIEW)}
                />
}

export default AddSheet;