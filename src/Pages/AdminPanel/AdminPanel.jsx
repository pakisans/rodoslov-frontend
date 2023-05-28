import { Tab, Tabs } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../Components/DataGrid/Table";
import AdminActiveTab from "../../Constants/AdminPanel";
import DataManagmentMode from "../../Constants/DataManagmentMode";
import { TableDataOptions, TableOptions } from "../../Constants/TableOptions";
import TableComponentContext from "../../Context/TableComponentContext";
import strings from "../../localization";
import { deleteBiography, getBiographies } from "../../Services/Biography/BiographyService";
import { deleteFamilies, getFamilies } from "../../Services/Family/FamilyService";
import { deleteSheet, getAllSheets } from "../../Services/Sheets/SheetsService";
import { deleteStructure, getStructures } from "../../Services/Structure/StructureService";
import { biographiesTableData, familyTableData, sheestTableData, structuresTableData } from "../../Utils/TableUtil";
import AddBioraphy from "../Biographies/AddBiography";
import EditBioraphy from "../Biographies/EditBiography";
import AddFamily from "../Families/AddFamily";
import EditFamily from "../Families/EditFamily";
import AddSheet from "../Sheets/AddSheet";
import EditSheet from "../Sheets/EditSheet";
import AddStructure from "../Structure/AddStructure";
import EditStructure from "../Structure/EditStructure";

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [tableColumns, setTableColumns] = useState([]);
    const [tableData, setTableData] = useState(TableDataOptions);
    const [tableOptions, setTableOptions] = useState(TableOptions);
    const [selectionModel, setSelectionModel] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState([]);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [dataManagementMode, setDataManagementMode] = useState(DataManagmentMode.VIEW);
    const isReadyForFetch = useSelector((state) => state.fetch.isReadyForFetch);
    const userSelector = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(userSelector?.userType == 0 || !userSelector){
            navigate('/');
            return () => {}
        }
    },[userSelector])

    const value = {
        selectedItemId, setSelectedItemId,
        tableOptions, setTableOptions,
        selectionModel, setSelectionModel,
        dataManagementMode, setDataManagementMode, showDeleteDialog, setShowDeleteDialog
    }

    useEffect(() => {
        if(activeTab == AdminActiveTab.SHEET){
            fecthSheets();
            setTableColumns([...sheestTableData]);
        }else if(activeTab == AdminActiveTab.FAMILY){
            fetchFamilies();
            setTableColumns([...familyTableData]);
        }else if(activeTab == AdminActiveTab.BIOGRAPHY){
            fetchBioraphies();
            setTableColumns([...biographiesTableData]);
        }else if(activeTab == AdminActiveTab.STRUCUTRE){
            fetchStructures();
            setTableColumns([...structuresTableData]);
        }
    },[isReadyForFetch, activeTab])

    const fetchFamilies = () => {
        setTableData({
            ...tableData,
            loading: true
        })
        getFamilies().then(res => {
            if(!res || !res.ok){
                setTableData({
                    loading: true,
                    data: [],
                    total: 0
                })
                return;
            };

            setTableData({
                loading: false,
                data: res?.data?.result,
                total: res?.data?.total
            });
        })
    }
    const fecthSheets = () => {
        setTableData({
            ...tableData,
            loading: true
        })
        getAllSheets().then(res => {
            if(!res || !res.ok){
                setTableData({
                    loading: true,
                    data: [],
                    total: 0
                })
                return;
            };
            setTableData({
                loading: false,
                data: res.data.result,
                total: res.data.total
            });
        })
    }

    const fetchBioraphies = () => {
        setTableData({
            ...tableData,
            loading: true
        })
        getBiographies().then(res => {
            if(!res || !res.ok){
                setTableData({
                    loading: true,
                    data: [],
                    total: 0
                })
                return;
            }
            setTableData({
                loading: false,
                data: res.data.result,
                total: res.data.total
            })
        })
    }

    const fetchStructures = () => {
        setTableData({
            ...tableData,
            loading: true
        })
        getStructures().then(res => {
            if(!res || !res.ok){
                setTableData({
                    loading: true,
                    data: [],
                    total: 0
                })
                return;
            };
            setTableData({
                loading: false,
                data: res.data.result,
                total: res.data.total
            });
        })
    }

    const getAddMethods = (activeTab) => {
        if(activeTab === AdminActiveTab.FAMILY) return <AddFamily setDataManagementMode={setDataManagementMode} />;
        else if(activeTab === AdminActiveTab.SHEET) return <AddSheet setDataManagementMode={setDataManagementMode} />
        else if(activeTab === AdminActiveTab.BIOGRAPHY) return <AddBioraphy setDataManagementMode={setDataManagementMode} />
        else if(activeTab === AdminActiveTab.STRUCUTRE) return <AddStructure setDataManagementMode={setDataManagementMode} />
    }

    const getEditMethods = (activeTab) => {
        if(activeTab === AdminActiveTab.FAMILY) return <EditFamily setDataManagementMode={setDataManagementMode} data={selectionModel} />
        else if(activeTab === AdminActiveTab.SHEET) return <EditSheet setDataManagementMode={setDataManagementMode} data={selectionModel} />
        else if(activeTab === AdminActiveTab.BIOGRAPHY) return <EditBioraphy setDataManagementMode={setDataManagementMode} data={selectionModel} />
        else if(activeTab === AdminActiveTab.STRUCUTRE) return <EditStructure setDataManagementMode={setDataManagementMode} data={selectionModel} />
    }

    const getDeleteMethods = (activeTab) => {
        if(activeTab == AdminActiveTab.FAMILY){
            return deleteFamilies;
        }else if(activeTab == AdminActiveTab.SHEET){
            return deleteSheet;
        }else if(activeTab == AdminActiveTab.BIOGRAPHY){
            return deleteBiography;
        }else if(activeTab == AdminActiveTab.STRUCUTRE){
            return deleteStructure;
        }
        return;
    }

    return <div className="admin-panel">
        <div className="content-container">
            <span className="page-title">{strings.components.adminPanel.adminTitle}</span>
            <Tabs variant="scrollable" value={activeTab} onChange={(e, tab) => setActiveTab(tab)} className="admin-tabs">
                <Tab key={`admin-tab-1`} className='admin-tab' label={strings.components.adminPanel.entities.family}></Tab>
                <Tab key={`admin-tab-2`} className='admin-tab' label={strings.components.adminPanel.entities.biography}></Tab>
                <Tab key={`admin-tab-3`} className='admin-tab' label={strings.components.adminPanel.entities.sheets}></Tab>
                <Tab key={`admin-tab-4`} className='admin-tab' label={strings.components.adminPanel.entities.structure}></Tab>
            </Tabs>
            { tableColumns.length && 
                <TableComponentContext.Provider value={value}>
                    <TableComponent 
                        addPage={getAddMethods(activeTab)}
                        editPage={getEditMethods(activeTab)}
                        deleteItem={getDeleteMethods(activeTab)}
                        tableData={tableData}
                        tableComponents={tableColumns} />
                </TableComponentContext.Provider>
            }
        </div>
    </div>
}

export default AdminPanel;