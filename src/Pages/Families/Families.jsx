import { Button, Tab, Tabs } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import strings from "../../localization";
import { getFamilies } from "../../Services/Family/FamilyService";
import { getSheets } from "../../Services/Sheets/SheetsService";

const Families = () => {
    const [families, setFamilies] = useState([]);
    const [isButtonActive, setIsButtonAcitve] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [tabItem, setTabItem] = useState({});
    const [sheets, setSheets] = useState([]);

    useEffect(() => {
        fetch();
    },[])

    useEffect(() => {
        getSheets({familyId:tabItem.id}).then(res => {
            if(!res||!res.ok) return;
            setSheets(res.data.result);
        })
    },[tabItem])

    const setTabOject = (value) => {
        setTabItem(value);
    }
    const renderFamilies = (data) => {
        if(!data || !data.length) return;

        return data.map((item, index) => {
            return <Tab key={`family-tab-key-${index}`} className='family-tab' onClick={() => setTabOject(item)} label={item.familyName}></Tab>

        })
    }

    const fetch = () => {
        getFamilies().then(res => {
            if(!res || !res.ok) return;
            setFamilies(res.data.result);
        })
    }

    return <div className="family-page">
        <div className="content-container">
            <span>{strings.pages.family.familyTitle}</span>
            <div className="family-tabs-container">
                <Tabs variant="scrollable" value={activeTab} onChange={(e, tab) => setActiveTab(tab)} className="family-tabs">
                    {renderFamilies(families)}
                </Tabs>
            </div>
        </div>
    </div>
}

export default Families;