import { useNavigate } from "react-router-dom";
import strings from "../../localization";

const LeftPanel = (props) => {
    const navigate = useNavigate();

    return <div onClick={() => navigate('/families')} onMouseOut={() => props.setActiveClass('')} onMouseOver={() => props.setActiveClass('active')} className={`navigation-menu ${props.active ? props.active: ''}`}>
        <a className="nav-item">{strings.header.family}</a>
    </div>
}

export default LeftPanel;