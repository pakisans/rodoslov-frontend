import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Base/OAuth";
import strings from "../../localization";

const RightPanel = (props) => {
    const navigate = useNavigate();
    const userSelector = useSelector((state) => state.auth.user)

    const rightPanelItems = [
        {
            component1: !userSelector && <img className="login-icon" src="/images/login-icon.png" />,
            component2: !userSelector && <a onClick={() => navigate('/login')} className="nav-item">{strings.header.login}</a>
        },
        {
            component1: userSelector && <img className="logout-icon" src="/images/login-icon.png" />,
            component2: userSelector && <a onClick={() => logout(() => navigate('/'))} className="nav-item">{strings.header.logout}</a>
        },
        {
            component1: undefined,
            component2: !userSelector && <a onClick={() => navigate('/registration')} className="nav-item">{strings.header.registratoin}</a>
        },
        {
            component1: undefined,
            component2: userSelector && userSelector.user_type == 1 && <a className="nav-item">{strings.header.adminPanel.addFamily}</a>
        }
    ]

    const renderRightPanelItems = (items) => {
        if(!items.length){
            return;
        }
        
        return items.map((item,key) => {
            return <div className="help-panel" key={`help-panel${key}`}>
                {item.component1}
                {item.component2}
            </div>
        })
    }

    

    return <div onMouseOut={() => props.setActiveClass('')} onMouseOver={() => props.setActiveClass('active')} className={`admin-nav ${props.active ? props.active: ''}`}>
            {renderRightPanelItems(rightPanelItems)}
        </div>
}

export default RightPanel;