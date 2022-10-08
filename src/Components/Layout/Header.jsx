import strings from "../../localization";
import Tooltip from '@mui/material/Tooltip';
import LeftPanel from "./LeftPanel";
import { useState } from "react";
import RightPanel from "./RightPanel";
import { css, cx } from '@emotion/css'

const Header = () => {
    const [activeClass, setActiveClass] = useState('');
    const [adminActiveClass, setAdminActiveClass] = useState('');

    return <>
        <header className="header">
            <nav className="nav-bar">
                <Tooltip title={strings.header.navigation}><img src="/images/arrow-down.svg" onMouseOver={() => setActiveClass('active')} className={`arrow-down ${activeClass ? css`transform: rotate(180deg); &:hover{cursor: help;}` : null}`} /></Tooltip>
                <div className="middle-group">
                    <img src="/images/logo.png" />
                    <label className="header-title">{strings.header.title}</label>
                    <img src="/images/logo.png" />
                </div>
                <Tooltip onMouseOver={() => setAdminActiveClass('active')} title={strings.header.panel}><img src="/images/arrow-down.svg" className={`arrow-down ${adminActiveClass ? css`transform: rotate(180deg);&:hover{cursor: help;}` : null}`} /></Tooltip>
            </nav>
        </header>
        <LeftPanel setActiveClass={setActiveClass} active={activeClass} />
        <RightPanel setActiveClass={setAdminActiveClass} active={adminActiveClass} />
    </>
}

export default Header;