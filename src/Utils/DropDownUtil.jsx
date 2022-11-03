import { MenuItem } from "@mui/material";
import strings from "../localization";

export const getOptions = ({options, nameKey, valueKey}) => {
    if(!options || !options.length){
        return;
    }

    let result = [<MenuItem key={'menu-option-select-'+nameKey + 1} value={-1}>{strings.components.common.select}</MenuItem>];

    options.map((item,index) => {
        result.push(<MenuItem value={item[valueKey]} key={`menu-item-${index}`}>{item[nameKey]}</MenuItem>)
    })

    return result;
}