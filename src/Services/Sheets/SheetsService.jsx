import { request } from "../../Base/HTTP"
import HttpMethod from "../../Constants/HttpMethod";

export const getSheetsByFamily = async (data) => {
    return await request(`/api/sheets`, data);
}

export const addSheet = async (data) => {
    return await request('/api/sheets', exportData(data), HttpMethod.POST);
}

export const editSheet = async (data) => {
    return await request(`/api/sheet/${data.id}`, exportData(data), HttpMethod.PUT);
}

export const deleteSheet = async (id) => {
    return await request(`/api/sheet/${id}`, {}, HttpMethod.DELETE);
}

export const getAllSheets = async (data) => {
    return await request('/api/sheets/all', data);
}

const exportData = (data) => {
    return {
        ...data,
        familyId: data?.family ? data.family.id : null,
        isStructure: 0,
    }
}