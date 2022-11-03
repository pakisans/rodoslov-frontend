import TextField from "@mui/material/TextField";
import {Controller} from "react-hook-form";
import React from "react";
import { FormControl, FormHelperText } from "@mui/material";

const TextFieldControl = (props) => {
    
    const options = {}

    if (props.onChange) {
        options.onChange = props.onChange;
    }

    if (props.className) {
        options.className = props.className;
    }

    return <Controller
        {...props}
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue}
        rules={props.rules}
        render={({ field }) =>
            <div className="text-control">
                <FormControl fullWidth>
                    <TextField {...field}
                                sx={{border: props.error ? `1px solid red` : 'unset'}}
                            {...options}
                            className={options.className ? options.className : 'text-field-control'}
                            id={props.id}
                            onKeyPress={props?.onKeyPress}
                            InputProps={{ disableunderline:"true" }}
                            InputLabelProps={{ ...field, shrink: true }}
                            size={props.size ? props.size : 'small'}
                            fullWidth={props.fullWidth ? props.fullWidth : true}
                            type={props.type}
                            margin={props.margin ? props.margin : 'normal'}
                            error={props.error}
                            label={props.label}
                            disabled={props.disabled}
                            multiline={props.multiline}
                            rows={props.rows}
                            placeholder={props.placeholder}
                    />
                </FormControl>
            <FormHelperText error>{props.helperText}</FormHelperText>
            </div>}
    />
}

export default TextFieldControl;