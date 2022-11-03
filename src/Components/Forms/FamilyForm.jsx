import { Button } from "@mui/material";
import { FormProvider } from "react-hook-form";
import TextFieldControl from "../../Controls/InputControls/TextFieldControl";
import strings from "../../localization";

const FamilyForm = ({errors, form, control, onSubmit, formRules, onCancel}) => {
    return <FormProvider {...form}>
        <form className="drawer-form" onSubmit={onSubmit}>
            <TextFieldControl
                name='familyName'
                rules={formRules['familyName']}
                control={control}
                defaultValue=""
                label={strings.components.forms.family.familyName}
                error={Boolean(errors.familyName)}
                helperText={errors.familyName && strings.components.forms.common.required}
                placeHolder={strings.components.forms.family.familyName}
            />
            <div className="action-buttons">
                <Button onClick={() => onSubmit()} className='save-button'>{strings.components.forms.common.saveButton}</Button>
                <Button onClick={() => onCancel()} className='cancel-button'>{strings.components.forms.common.cancelButton}</Button>
            </div>
        </form>
    </FormProvider>
}

export default FamilyForm;