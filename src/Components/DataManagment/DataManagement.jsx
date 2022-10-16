import { useEffect } from "react";
import { useState } from "react";

const DataManagementDrawer = (props) => {
    const [title, setTitle] = useState('');
    useEffect(() => {
        setTitle(props.title)
    },[props.title])
    return <div className="drawer">
        <div className="drawer-header">
            <span>{title}</span>
        </div>
        <div className="drawer-content">
            {props.children}
        </div>
    </div>
}

export default DataManagementDrawer;