import { Drawer } from '@mui/material';
import {DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport} from '@mui/x-data-grid';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataManagmentMode from '../../Constants/DataManagmentMode';
import HelpDialogResult from '../../Constants/HelpDialogResult';
import TableComponentContext from '../../Context/TableComponentContext';
import strings from '../../localization';
import { setIsReadyForFetch } from '../../Slices/FetchSlice';
import DataManagementDrawer from '../DataManagment/DataManagement';
import HelpDialog from '../Dialogs/HelpDialog';
import ActionCell from './ActionCell';
import {MdAddCircleOutline} from 'react-icons/md';
const TableComponent = ({tableComponents, tableData, deleteItem, addPage, editPage}) => {
    const dispatch = useDispatch();
    const dataManagementTitle = useSelector((state) => state.dataManagement.title);
    const {
        tableOptions,
        selectedItemId, setSelectedItemId,
        selectionModel, setSelectionModel,
        dataManagementMode, setDataManagementMode,
        showDeleteDialog, setShowDeleteDialog,
    } = useContext(TableComponentContext);

    const getTableComponents = (values) => {
        if(!values || !values.length) return;
        let result = [...values];
        
        result.unshift({
            field: 'action',
            headerName: strings.components.dataGrid.actions,
            width: 75,
            renderCell: (params) => <ActionCell params options={tableOptions} editPage={editPage}
                                    handleEdit={handleEdit} handleDelete={openDeleteDialog}
                                    id={params.id} item={params.row} deleteItem={deleteItem}
            />
        });
        
        return result;
    }

    const getItemByIdem = (id, data) => {
        if(!id || !data.length)return;
        return data.find(e => e.id == id);
    }

    const handleItemChange = (id) => {
        if(!id) return;
        setSelectionModel([getItemByIdem(id, tableData.data)])
    }   

    const isDataManagementModuleOpen = () => {
        return dataManagementMode !== DataManagmentMode.VIEW;
    }

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    }

    const handleEdit = () => {
        setDataManagementMode(DataManagmentMode.EDIT);
    }

    const handleDelete = (result, payload) => {
        if (result === HelpDialogResult.NO || result === HelpDialogResult.CANCEL) {
            setShowDeleteDialog(false);
            return;
        }

        if (!deleteItem || !selectedItemId) {
            setShowDeleteDialog(false);
            return;
        }

        deleteItem(selectedItemId).then(res => {
            if (!res || !res.ok) {
                setShowDeleteDialog(false);
                setSelectedItemId(null);
                return;
            }
            dispatch(setIsReadyForFetch());
            setShowDeleteDialog(false);
            setSelectedItemId(null);
        })
    }

    const CustomGridToolBar = (props) => {
        return (
            <GridToolbarContainer {...props}>
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
                <div onClick={() => setDataManagementMode(DataManagmentMode.ADD)} className='add-item'>
                    <MdAddCircleOutline size={20} />
                    <span>{strings.components.dataGrid.add}</span>
                </div>
            </GridToolbarContainer>
        )
    }

    return <React.Fragment>
        <HelpDialog show={showDeleteDialog} payload={selectionModel} handleResult={handleDelete} title={strings.components.helpDialog.deleteTitle} 
                    text={strings.components.helpDialog.deleteText} yesText={strings.components.helpDialog.yesText} noText={strings.components.helpDialog.noText} />
        <DataGrid   
            columns={getTableComponents(tableComponents)} rows={tableData.data}
            onSelectionModelChange={(e) => handleItemChange(e)}
            selectionModel={selectionModel}
            autoHeight rowHeight={40} loading={tableData.loading} rowsPerPageOptions={[30,60,100]}
            components={{
                Toolbar: CustomGridToolBar,
            }}
        />
        <Drawer className='data-managment-drawer' onClose={() => setDataManagementMode(DataManagmentMode.VIEW)} open={isDataManagementModuleOpen()} anchor='right'>
            <DataManagementDrawer title={dataManagementTitle} onClose={() => setDataManagementMode(DataManagmentMode.VIEW)} onBack={() => setDataManagementMode(DataManagmentMode.VIEW)}>
                {
                    (dataManagementMode === DataManagmentMode.ADD) && addPage 
                }
                {
                    (dataManagementMode === DataManagmentMode.EDIT) && editPage
                }
            </DataManagementDrawer>
        </Drawer>
    </React.Fragment>
}

export default TableComponent;