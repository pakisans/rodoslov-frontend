import { createContext } from "react";
import DataManagmentMode from "../Constants/DataManagmentMode";

const TableComponentContext = createContext({
    dataManagementMode: DataManagmentMode.VIEW,
    setDataManagementMode: () => {},
    selectionModel: [],
    setSelectionModel: () => {},
    selecetedItemId: 0,
    setSelectedItemId: () => {}
})

export default TableComponentContext;