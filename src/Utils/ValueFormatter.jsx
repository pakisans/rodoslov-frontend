import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export const renderDate = (item) => {
    if(!item.value) return '';
    return new Date(item.value).toLocaleDateString();
}

export const renderFormDate = (item) => {
    if(!item) return null;

    return new Date(item).toLocaleDateString();
}

export const getObjectValue = (object, key) => {
    if(!object.value || !key) return;

    return object?.value[key];
}

export const renderBoolean = (params) => {
    if(!params.value){
        return <div style={{justifyContent: 'center', display: 'flex', width: '100%'}}><CloseIcon style={{color: 'red'}} /></div>
    }
    return <div style={{justifyContent: 'center', display: 'flex', width: '100%'}}><DoneIcon style={{color: 'green'}} /></div>
}