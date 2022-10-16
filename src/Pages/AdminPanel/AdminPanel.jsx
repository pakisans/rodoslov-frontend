import { Tab, Tabs } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TableComponent from "../../Components/DataGrid/Table";
import DataManagmentMode from "../../Constants/DataManagmentMode";
import { TableDataOptions, TableOptions } from "../../Constants/TableOptions";
import TableComponentContext from "../../Context/TableComponentContext";
import strings from "../../localization";
import { deleteFamilies, getFamilies } from "../../Services/Family/FamilyService";
import { familyTableData } from "../../Utils/TableUtil";
import AddFamily from "../Families/AddFamily";
import EditFamily from "../Families/EditFamily";

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [familyData, setFamilyData] = useState([]);
    const [tableColumns, setTableColumns] = useState([]);
    const [tableData, setTableData] = useState(TableDataOptions);
    const [tableOptions, setTableOptions] = useState(TableOptions);
    const [selectionModel, setSelectionModel] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState([]);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [dataManagementMode, setDataManagementMode] = useState(DataManagmentMode.VIEW);
    const isReadyForFetch = useSelector((state) => state.fetch.isReadyForFetch);

    useEffect(() => {
        fetchFamilies();
        setTableColumns([...familyTableData])
    },[isReadyForFetch])

    const value = {
        selectedItemId, setSelectedItemId,
        tableOptions, setTableOptions,
        selectionModel, setSelectionModel,
        dataManagementMode, setDataManagementMode, showDeleteDialog, setShowDeleteDialog
    }

    const fetchFamilies = () => {
        setTableData({
            ...tableData,
            loading: true
        })
        getFamilies().then(res => {
            if(!res || !res.ok) return;

            setTableData({
                loading: false,
                data: res?.data?.result,
                total: res?.data?.total
            });
        })
    }
    return <div className="admin-panel">
        <div className="content-container">
            <span className="page-title">{strings.components.adminPanel.adminTitle}</span>
            <Tabs variant="scrollable" value={activeTab} onChange={(e, tab) => setActiveTab(tab)} className="admin-tabs">
                <Tab key={`admin-tab-1`} className='admin-tab' label={strings.components.adminPanel.entities.family}></Tab>
                <Tab key={`admin-tab-2`} className='admin-tab' label={strings.components.adminPanel.entities.biography}></Tab>
                <Tab key={`admin-tab-3`} className='admin-tab' label={strings.components.adminPanel.entities.sheets}></Tab>
            </Tabs>
            { tableColumns.length && 
                <TableComponentContext.Provider value={value}>
                    <TableComponent addPage={<AddFamily setDataManagementMode={setDataManagementMode} />} editPage={<EditFamily setDataManagementMode={setDataManagementMode} data={selectionModel} />} deleteItem={deleteFamilies} tableData={tableData} tableComponents={tableColumns} />
                </TableComponentContext.Provider>
            }
        </div>
    </div>
}

export default AdminPanel;