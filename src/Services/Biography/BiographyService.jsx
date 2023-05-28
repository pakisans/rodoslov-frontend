import { request } from "../../Base/HTTP"
import HttpMethod from "../../Constants/HttpMethod"

export const getBiographies = async (data) => {
    return await request('/api/biographies', data);
}
export const addBiography = async (data) => {
    return await request('/api/biography', exportData(data), HttpMethod.POST);
}
export const editBiography = async (data) => {
    return await request(`/api/biography/${data.id}`, exportData(data), HttpMethod.PUT);
}
export const deleteBiography = async (id) => {
    return await request(`/api/biography/${id}`, {}, HttpMethod.DELETE);
}

export const getBiographyByNode = async (data) => {
    return await request('/api/biography', {id: data?.mainId ? data?.mainId : data.id});
}

const exportData = (data) => {
    return {
        ...data,
        sheetId: data.sheet ? data.sheet.id : null,
    }
}