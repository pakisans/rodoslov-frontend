import TextField from "@mui/material/TextField";
import {Controller} from "react-hook-form";
import React from "react";

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
            <TextField {...field}
                       {...options}
                       className={options.className ? options.className : 'text-field-control'}
                       id={props.id}
                       variant="standard"
                       onKeyPress={props?.onKeyPress}
                       InputProps={{ disableUnderline: true }}
                       InputLabelProps={{ ...field, shrink: true }}
                       size={props.size ? props.size : 'small'}
                       fullWidth={props.fullWidth ? props.fullWidth : true}
                       type={props.type}
                       margin={props.margin ? props.margin : 'normal'}
                       error={props.error}
                       helperText={props.helperText}
                       label={props.label}
                       disabled={props.disabled}
                       multiline={props.multiline}
                       rows={props.rows}
                       placeholder={props.placeholder}
            />}
    />
}

export default TextFieldControl;