import { FormControl, TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import React, {useEffect, useState} from "react";
import { Controller } from "react-hook-form";
import { dateAsUTCDate } from "../../Utils/DateUtil";

const DateControl = ({control, value, setValue, size, label, name, rules, minDate, ...props}) => {
    const [date, setDate] = useState(value);

    useEffect(() => {
        setDate(value)
    }, [value])

    const changeDate = (date) => {
        let newValue = dateAsUTCDate(date)
        setValue(name, newValue);
        setDate(newValue);
    }

    return (<Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) =>
            <div className={`data-control`}>
                <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            fullWidth
                            label={label}
                            inputFormat="dd/MM/yyyy"
                            value={date}
                            minDate={minDate}
                            mask="__/__/____"
                            onChange={(date) => {
                                if (field?.onChange) {
                                    field.onChange(() => changeDate(date));
                                    return
                                }
                                changeDate(date);
                            }}
                            renderInput={(params) => <TextField {...params} error={props.error} helperText={props.helperText} size={size ? size : 'small'}/>}
                        />
                        
                    </LocalizationProvider>
                </FormControl>
            </div>
        }
    >
    </Controller>
    )

}

export default DateControl;