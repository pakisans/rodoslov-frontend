import { Avatar, Button, FormControl, FormHelperText, FormLabel } from "@mui/material"
import { useState } from "react";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { toBase64 } from "../../Utils/ImageUtil";

const PhotoControl = ({name, value, setValue, control, label, showChangePhoto, photoLabel, maxImageSize = 10240}) => {
    const [file, setFile] = useState(value);
    const [maxSizeError, setMaxSizeError] = useState(false);

    useEffect(() => {
        setFile(value);
    },[value])

    const onUpload = async (files) => {
        const logo = await toBase64(files[0]);

        setFile(URL.createObjectURL(files[0]));
        setMaxSizeError((files[0].size / 1024) > maxImageSize);
        return logo;
    }

    const onFileChange = (event) => {
        onUpload(event.target.files).then(logo => {
            setValue(name,logo);
        });
    }


    return <FormControl>
        <FormLabel>{photoLabel}</FormLabel>
        <Controller
            name={name}
            control={control}
            render={({ field }) => 
            <div className={'photo-control'}>
                <Avatar {...field}
                    alt='photo-image'
                    src={file}
                    variant={
                        "rounded"
                    }
                />
                <div className="photo-button">
                    {   showChangePhoto &&
                    <Button
                        variant="contained"
                        component="label"
                        className='button'
                    >
                        {label}
                        <input
                            onChange={onFileChange}
                            type="file"
                            hidden
                            accept="image/*"
                        />
                    </Button>
                    }
                    {
                        maxSizeError &&
                        <FormHelperText error={true}>Image too large, you can upload files up to 4MB</FormHelperText>
                    }
                </div>
            </div>
            }

        />
    </FormControl>
}

export default PhotoControl;