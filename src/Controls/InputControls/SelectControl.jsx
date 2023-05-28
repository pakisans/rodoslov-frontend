import { Box, FormControl, FormHelperText, InputLabel, Select } from "@mui/material"
import { useEffect } from "react";
import { useState } from "react";
import { Controller } from "react-hook-form"
import { getOptions } from "../../Utils/DropDownUtil";

const SelectControl = ({
    value,
    setValue, 
    name,
    error,
    label, 
    formRules, 
    helpText, 
    options,
    nameKey,
    valueKey,
    disabled
}) => {
    const [newValue, setNewValue] = useState(value && value[valueKey] ? value[valueKey] : -1);

    const handleChange = value => {
        setValue(name, getValue(value))
        setNewValue(value);
    }

    const getValue = (value) => {
        if(!valueKey || !options) {
            return value;
        }

        return  options.find(x => x[valueKey] === value)
    }

    useEffect(() => {
        if(value && !(value instanceof Object)) {
            setNewValue(value)
            return;
        }

        setNewValue(value && value[valueKey] ? value[valueKey] : -1)
    }, [value])
    
    return <div className="select-control">
        <FormControl fullWidth>
            <InputLabel error={error}>{label}</InputLabel>
            <Controller rules={formRules} name={name} 
                render={({field}) => <Select {...field}
                                            disabled={disabled}
                                            // sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: '0 !important' } }}
                                            label={label}
                                            error={error}
                                            value={newValue}
                                            onChange={e => {
                                                if(field?.onChange){
                                                    field.onChange((e) => handleChange(e?.target?.value));
                                                }
                                                handleChange(e.target.value);
                                            }}
                                    >
                                        {getOptions({options, nameKey, valueKey})}
                                    </Select>}

            />
            {
                error &&
                <FormHelperText className="helper-erorr" error>{helpText}</FormHelperText>
            }
        </FormControl>
    </div>
}

export default SelectControl;