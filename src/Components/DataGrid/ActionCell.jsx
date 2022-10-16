import { Fade, Tooltip } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import {FaEdit,FaTrashAlt} from "react-icons/fa";
import TableComponentContext from "../../Context/TableComponentContext";
import strings from "../../localization";

const ActionCell = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const {setSelectionModel, setSelectedItemId} = useContext(TableComponentContext);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleClick = (handler) => {
        setSelectionModel(props.id);
        setSelectedItemId(props.id);
        handleClose();
        handler(props.id);
    }

    if(!props){
        return;
    }

    return <div className="action-cells">
        <Tooltip followCursor TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={strings.components.actionCell.edit}>
            <div className="action-cell">
            {
                props.options.showActionEdit && props.editPage &&
                <FaEdit size={20} onClick={() => handleClick(props.handleEdit)} 
                        onMouseOver={(event)=>{
                        handleOpen(event);
                        }}
                        onMouseLeave={handleClose} />
            }                
            </div>
        </Tooltip>
        <Tooltip followCursor TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={strings.components.actionCell.delete}>
        <div className="action-cell">
            {
                props.options.showActionDelete && props.deleteItem &&
                <FaTrashAlt size={15} onClick={() => handleClick(props.handleDelete)}
                    
                    onMouseOver={(event)=>{
                        handleOpen(event);
                        }}
                    onMouseLeave={handleClose} />
            }
        </div>
        </Tooltip>
    </div>

}

export default ActionCell;