import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import StructureForm from "../../Components/Forms/StructureForm";
import DataManagmentMode from "../../Constants/DataManagmentMode";
import strings from "../../localization";
import { getFamilies } from "../../Services/Family/FamilyService";
import { setDataManagementTitle } from "../../Slices/DataManagementSlice";
import { setIsReadyForFetch } from "../../Slices/FetchSlice";
import { structureRules } from "../../Utils/FormRulesUtil";

const AddStructure = ({setDataManagementMode}) => {
    const dispatch = useDispatch();
    const form = useForm();
    const {handleSubmit, control, getValues, setValue, formState:{errors} } = form;
    const [families, setFamilies] = useState([]);

    useEffect(() => {
        dispatch(setDataManagementTitle(strings.pages.family.addFamily));
    })

    useEffect(() => {
        fetchFamilies();
    },[])

    const onSubmit = (data) => {
        // addFamilies(data).then(res => {
        //     if(!res || !res.ok) return;
        // })
        // .finally(() => {
        //     setDataManagementMode(DataManagmentMode.VIEW);
        //     dispatch(setIsReadyForFetch());
        // })
    }

    const fetchFamilies = () => {
        getFamilies().then(res => {
            if(!res || !res.ok) return;
            setFamilies(res.data.result);
        })
    }

    return <StructureForm
        setValue={setValue}
        form={form}
        values={getValues}
        families={families}
        formRules={structureRules}
        control={control}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)} 
        onCancel={() => setDataManagementMode(DataManagmentMode.VIEW)}
     />
}

export default AddStructure;