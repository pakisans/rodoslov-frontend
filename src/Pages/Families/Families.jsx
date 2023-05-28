import { Tab, Tabs } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Tree from "../../Components/DataDiagram/Tree";
import strings from "../../localization";
import { getFamilies } from "../../Services/Family/FamilyService";
import { getRootElement } from "../../Services/Structure/StructureService";

const Families = () => {
    const [families, setFamilies] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [tabItem, setTabItem] = useState({});
    const [rootElement, setRootElement] = useState({});

    useEffect(() => {
        fetch();
    },[])

    useEffect(() => {
      getRootElement({familyId:tabItem.id}).then(res => {
            if(!res || !res.ok) return;

            setRootElement({...res.data.root[0], children:res?.data?.childrens?.length ? res?.data?.childrens : undefined});
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
            setTabItem(res.data.result[0])
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
            <span className="familija">{tabItem?.familyName}</span>
            {rootElement.id ? <Tree root={rootElement} setRootElement={setRootElement}></Tree> : <span className="no-structure-message">{strings.pages.family.noStructureMessage}</span>}
        </div>
    </div>
}

export default Families;