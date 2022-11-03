import { Button } from "@mui/material"
import { FormProvider } from "react-hook-form"
import SelectControl from "../../Controls/InputControls/SelectControl"
import strings from "../../localization"

const StructureForm = ({
    form,
    onSubmit,
    onCancel,
    errors,
    families,
    setValue,
    control,
    values,
    formRules,
    superiors
}) => {
    return <FormProvider {...form}>
        <form className="drawer-form" onSubmit={onSubmit}>
            <SelectControl 
                    value={values('family')}
                    setValue={setValue}
                    name='family'
                    label={strings.components.forms.strucutre.family}
                    options={families}
                    nameKey={'familyName'}
                    valueKey={'id'}
                    error={Boolean(errors.family)}
                    helperText={errors.family && strings.components.forms.common.required}
                    rules={formRules['family']}
                />
            <SelectControl 
                    value={values('superior')}
                    setValue={setValue}
                    name='superior'
                    label={strings.components.forms.strucutre.superior}
                    options={superiors}
                    nameKey={'familyName'}
                    valueKey={'id'}
                    error={Boolean(errors.superior)}
                    helperText={errors.superior && strings.components.forms.common.required}
                    rules={formRules['superior']}
                />
            <SelectControl 
                    value={values['subordinate']}
                    setValue={setValue}
                    name='subordinate'
                    label={strings.components.forms.strucutre.subordinate}
                    options={families}
                    nameKey={'subordinate'}
                    valueKey={'id'}
                    error={Boolean(errors.subordinate)}
                    helperText={errors.subordinate && strings.components.forms.common.required}
                    rules={formRules['subordinate']}
                />
            <div className="action-buttons">
                <Button onClick={() => onSubmit()} className='save-button'>{strings.components.forms.common.saveButton}</Button>
                <Button onClick={() => onCancel()} className='cancel-button'>{strings.components.forms.common.cancelButton}</Button>
            </div>
        </form>
    </FormProvider>
}

export default StructureForm;