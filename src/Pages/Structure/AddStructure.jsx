import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import StructureForm from "../../Components/Forms/StructureForm";
import DataManagmentMode from "../../Constants/DataManagmentMode";
import NotificationActionContext from "../../Context/NotificationActionWrapper";
import strings from "../../localization";
import { getFamilies } from "../../Services/Family/FamilyService";
import { getSheetsByFamily } from "../../Services/Sheets/SheetsService";
import { addStructure } from "../../Services/Structure/StructureService";
import { setDataManagementTitle } from "../../Slices/DataManagementSlice";
import { setIsReadyForFetch } from "../../Slices/FetchSlice";
import { structureRules } from "../../Utils/FormRulesUtil";

const AddStructure = ({setDataManagementMode}) => {
    const dispatch = useDispatch();
    const form = useForm();
    const {handleSubmit, control, getValues, setValue, formState:{errors} } = form;
    const [families, setFamilies] = useState([]);
    const [superiors, setSuperiors] = useState([]);
    const [subordinates, setSubordinates] = useState([]);
    const {showNotification} = useContext(NotificationActionContext);

    useEffect(() => {
        dispatch(setDataManagementTitle(strings.pages.structure.addStructure));
    })

    useEffect(() => {
        fetchFamilies();
    },[])

    const onSubmit = (data) => {
        addStructure(data).then(res => {
            if(!res || !res.ok){
                showNotification(strings.common.errorAdding, 'error');
                return;
            }
        }).finally(() => {
            dispatch(setIsReadyForFetch());
            setDataManagementMode(DataManagmentMode.VIEW);
            showNotification(strings.common.itemAdded)
        })
    }

    const onFamilyChange = (e) => {
        if(!e){
            setValue('',-1);
            return;
        }

        setValue('family',e)

        getSheetsByFamily({familyId:e.id}).then(res => {
            if(!res || !res.ok) return;

            setSuperiors(res.data.result);
        })

    }

    const onSuperiorChange = (e) => {
        if(!e){
            setValue('', -1);
            return;
        }

        setValue('superior', e);

        getSheetsByFamily({familyId:e.family.id, superiorId: e.id}).then(res => {
            if(!res || !res.ok) return;

            setSubordinates(res.data.result);
        })
    }

    const fetchFamilies = () => {
        getFamilies().then(res => {
            if(!res || !res.ok) return;
            setFamilies(res.data.result);
        })
    }

    const fetchSheets = () => {

    }
 
    return <StructureForm
        setValue={setValue}
        form={form}
        values={getValues}
        families={families}
        formRules={structureRules}
        control={control}
        errors={errors}
        superiors={superiors}
        subordinates={subordinates}
        onFamilyChange={onFamilyChange}
        onSuperiorChange={onSuperiorChange}
        onSubmit={handleSubmit(onSubmit)} 
        onCancel={() => setDataManagementMode(DataManagmentMode.VIEW)}
     />
}

export default AddStructure;