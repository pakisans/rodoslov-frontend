import { Button } from "@mui/material"
import { FormProvider } from "react-hook-form"
import DateControl from "../../Controls/InputControls/DateControl"
import SelectControl from "../../Controls/InputControls/SelectControl"
import TextFieldControl from "../../Controls/InputControls/TextFieldControl"
import strings from "../../localization"

const BiographyForm = ({
    form,
    onSubmit,
    onCancel,
    errors,
    sheets,
    control,
    setValue,
    values,
    formRules
}) => {
    return <FormProvider {...form}>
        <form className="drawer-form" onSubmit={onSubmit}>
            <DateControl 
                control={control}
                label={strings.components.forms.biography.dateFrom}
                name='dateFrom'
                value={values['dateFrom']}
                setValue={setValue}
                rules={formRules['dateFrom']}
                error={Boolean(errors.dateFrom)}
                helperText={errors.dateFrom && strings.components.forms.common.required}
            />
            <DateControl 
                control={control}
                label={strings.components.forms.biography.dateTo}
                name='dateTo'
                value={values['dateTo']}
                setValue={setValue}
            />
            <TextFieldControl
                name='whereIs'
                rules={formRules['whereIs']}
                control={control}
                defaultValue=""
                label={strings.components.forms.biography.whereIs}
                error={Boolean(errors.whereIs)}
                helperText={errors.whereIs && strings.components.forms.common.required}
            />
            <TextFieldControl
                name='biographyDescription'
                rules={formRules['biographyDescription']}
                control={control}
                defaultValue=""
                multiline
                label={strings.components.forms.biography.biographyDescription}
                error={Boolean(errors.biographyDescription)}
                helperText={errors.biographyDescription && strings.components.forms.common.required}
            />
            <TextFieldControl
                name='graveMarker'
                control={control}
                defaultValue=""
                label={strings.components.forms.biography.graveMarker}
            />
            <TextFieldControl
                name='spouseInformation'
                control={control}
                defaultValue=""
                label={strings.components.forms.biography.spouseInformation}
            />
            <SelectControl 
                value={values('sheet')}
                setValue={setValue}
                control={control}
                name='sheet'
                label={strings.components.forms.biography.sheet}
                options={sheets}
                nameKey={'fullName'}
                valueKey={'id'}
                error={Boolean(errors.sheet)}
                helpText={errors.sheet && strings.components.forms.common.required}
                formRules={formRules['sheet']}
            />
            <div className="action-buttons">
                <Button onClick={() => onSubmit()} className='save-button'>{strings.components.forms.common.saveButton}</Button>
                <Button onClick={() => onCancel()} className='cancel-button'>{strings.components.forms.common.cancelButton}</Button>
            </div>
        </form>
    </FormProvider>
}

export default BiographyForm;