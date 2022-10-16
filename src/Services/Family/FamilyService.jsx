import { request } from "../../Base/HTTP"
import HttpMethod from "../../Constants/HttpMethod";

export const getFamilies = async (data) => {
    return await request('/api/families', data);
}

export const addFamilies = async (data) => {
    return await request('/api/families', data, HttpMethod.POST);
}

export const editFamiliy = async (data) => {
    return await request(`/api/family/${data.id}`, data, HttpMethod.PUT);
}

export const deleteFamilies = async (id) => {
    return await request(`/api/family/${id}`, {}, HttpMethod.DELETE);
}