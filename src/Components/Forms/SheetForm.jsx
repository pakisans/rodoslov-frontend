import { Button } from "@mui/material"
import { FormProvider } from "react-hook-form";
import DateControl from "../../Controls/InputControls/DateControl";
import PhotoControl from "../../Controls/InputControls/PhotoControl";
import SelectControl from "../../Controls/InputControls/SelectControl";
import TextFieldControl from "../../Controls/InputControls/TextFieldControl";
import strings from "../../localization";

const SheetForm = ({
    form,
    onSubmit,
    control,
    onCancel,
    errors,
    formRules,
    families,
    values,
    setValue
}) => {
    return <FormProvider {...form}>
        <form className="drawer-form" onSubmit={onSubmit}>
            <TextFieldControl
                name='firstName'
                rules={formRules['firstName']}
                control={control}
                defaultValue=""
                label={strings.components.forms.strucutre.firstName}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName && strings.components.forms.common.required}
                placeHolder={strings.components.forms.strucutre.firstName}
            />
            <SelectControl 
                value={values('family')}
                setValue={setValue}
                control={control}
                name='family'
                label={strings.components.forms.strucutre.family}
                options={families}
                nameKey={'familyName'}
                valueKey={'id'}
                error={Boolean(errors.family)}
                helpText={errors.family && strings.components.forms.common.required}
                formRules={formRules['family']}
            />

            <TextFieldControl
                name='address'
                rules={formRules['address']}
                control={control}
                label={strings.components.forms.strucutre.address}
                defaultValue=""
                error={Boolean(errors.address)}
                helperText={errors.address && strings.components.forms.common.required}
                placeHolder={strings.components.forms.strucutre.address}
            />

            <TextFieldControl
                name='currentLevel'
                rules={formRules['currentLevel']}
                control={control}
                defaultValue=""
                label={strings.components.forms.strucutre.currentLevel}
                type='number'
                error={Boolean(errors.currentLevel)}
                helperText={errors.currentLevel && strings.components.forms.common.required}
                placeHolder={strings.components.forms.strucutre.currentLevel}
            />
            <DateControl
                control={control}
                label={strings.components.forms.strucutre.dateOfBirth}
                name='dateOfBirth'
                value={values('dateOfBirth')}
                rules={formRules['dateOfBirth']}
                error={Boolean(errors.dateOfBirth)}
                helperText={errors.dateOfBirth && strings.components.forms.common.required}
                setValue={setValue}
            />
            <DateControl
                control={control}
                label={strings.components.forms.strucutre.dateOfDeath}
                name='dateOfDeath'
                value={values('dateOfDeath')}
                setValue={setValue}
            />
            <PhotoControl 
                name='photo'
                label={strings.components.forms.strucutre.addPhoto}
                control={control}
                value={values('photo')}
                showChangePhoto
                setValue={setValue}
                maxImageSize={4096}
                photoLabel={strings.components.forms.strucutre.photo}
            />
            <div className="action-buttons">
                <Button onClick={() => onSubmit()} className='save-button'>{strings.components.forms.common.saveButton}</Button>
                <Button onClick={() => onCancel()} className='cancel-button'>{strings.components.forms.common.cancelButton}</Button>
            </div>
        </form>
    </FormProvider>
}

export default SheetForm;