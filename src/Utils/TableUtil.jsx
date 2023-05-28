import strings from "../localization";
import { getObjectValue, renderBoolean, renderDate } from "./ValueFormatter";

export const familyTableData = [
    {field: 'familyName', headerName: strings.pages.family.familyName, width: 200}
]

export const sheestTableData = [
    {
        field: 'family', headerName: strings.pages.sheets.family, width: 200,
        valueFormatter: params => getObjectValue(params, 'familyName')
    },
    {
        field: 'firstName', headerName: strings.pages.sheets.firstName, width: 150
    },
    {
        field: 'dateOfBirth', headerName: strings.pages.sheets.dateOfBirth, width: 150,
        valueFormatter: params => renderDate(params)
    },
    {
        field: 'dateOfDeath', headerName: strings.pages.sheets.dateOfDeath, width: 150,
        valueFormatter: params => renderDate(params)
    },
    {
        field: 'address', headerName: strings.pages.sheets.address, width: 200
    },
    {
        field: 'isStructure', headerName: strings.pages.sheets.isStructure, width: 105,
        renderCell: params => renderBoolean(params)
    },
    {
        field: 'currentLevel', headerName: strings.pages.sheets.currentLevel, width: 100
    },
]

export const biographiesTableData = [
    {
        field: 'dateFrom', headerName: strings.pages.biography.dateFrom, width: 150,
        valueFormatter: params => renderDate(params)
    },
    {
        field: 'dateTo', headerName: strings.pages.biography.dateTo, width: 150,
        valueFormatter: params => renderDate(params)
    },
    {
        field: 'biographyDescription', headerName: strings.pages.biography.biographyDescription, width: 200
    },
    {
        field: 'spouseInformation', headerName: strings.pages.biography.spouseInformation, width: 200
    },
    {
        field: 'graveMarker', headerName: strings.pages.biography.graveMarker, width: 200
    },
    {
        field: 'sheets', headerName: strings.pages.biography.sheet, width: 200,
        valueFormatter: params => getObjectValue(params, 'fullName')
    }
]

export const structuresTableData = [
    {
        field: 'family', headerName: strings.pages.structure.family, width: 200,
        valueFormatter: params => getObjectValue(params, 'familyName')
    },
    {
        field: 'subordinate', headerName: strings.pages.structure.subordinate, width: 200,
        valueFormatter: params => getObjectValue(params, 'fullName')
    },
    {
        field: 'superior', headerName: strings.pages.structure.superior, width: 200,
        valueFormatter: params => getObjectValue(params, 'fullName')
    }
]