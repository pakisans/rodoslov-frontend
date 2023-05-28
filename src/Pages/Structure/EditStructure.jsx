import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import StructureForm from "../../Components/Forms/StructureForm";
import DataManagmentMode from "../../Constants/DataManagmentMode";
import NotificationActionContext from "../../Context/NotificationActionWrapper";
import strings from "../../localization";
import { getFamilies } from "../../Services/Family/FamilyService";
import { getSheetsByFamily } from "../../Services/Sheets/SheetsService";
import { editStructure } from "../../Services/Structure/StructureService";
import { setDataManagementTitle } from "../../Slices/DataManagementSlice";
import { setIsReadyForFetch } from "../../Slices/FetchSlice";
import { sheetFormRules } from "../../Utils/FormRulesUtil";

const EditStructure = ({setDataManagementMode, data}) => {
    const dispatch = useDispatch();
    const form = useForm({
        defaultValues: data && data.length > 0 ? data[0] : undefined
    });
    const {control, setValue, getValues, formState: {errors}, handleSubmit} = form;
    const [families, setFamilies] = useState([]);
    const {showNotification} = useContext(NotificationActionContext);
    const [superiors, setSuperiors] = useState([]);
    const [subordinates, setSubordinates] = useState([]);

    useEffect(() => {
        dispatch(setDataManagementTitle(strings.pages.sheets.editSheet))
    });

    useEffect(() => {
        fetchSheets();
        fetchSuperiors();
        fetchSuboridnates();
    },[])
    

    const fetchSheets = () => {
        getFamilies().then(res => {
            if(!res || !res.ok) return;
            setFamilies(res.data.result);
        })
    }

    const onSubmit = (data) => {
        editStructure(data).then(res => {
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

    const fetchSuperiors = () => {
        getSheetsByFamily({familyId:data[0]?.family?.id}).then(res => {
            if(!res || !res.ok) return;

            setSuperiors(res.data.result);
        })
    }

    const fetchSuboridnates = () => {
        getSheetsByFamily({familyId:data[0]?.family?.id, superiorId: data[0]?.superior?.id}).then(res => {
            if(!res || !res.ok) return;

            const result = [...res.data.result, data[0].subordinate];
            // let duplicateRemoved = false;

            // const finalResult = result.filter((subordinate) => {
            //     if (subordinate.id === data[0].subordinate.id && !duplicateRemoved) {
            //     duplicateRemoved = true;
            //     return false;
            //     }
            //     return true;
            // });

            setSubordinates(result);
                    
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

    return <StructureForm 
        control={control}
        setValue={setValue}
        values={getValues}
        errors={errors}
        formRules={sheetFormRules}
        superiors={superiors}
        subordinates={subordinates}
        onFamilyChange={onFamilyChange}
        onSuperiorChange={onSuperiorChange}
        form={form}
        families={families}
        onSubmit={handleSubmit(onSubmit)}
        onCancel={() =>  setDataManagementMode(DataManagmentMode.VIEW)}
    />
}

export default EditStructure;