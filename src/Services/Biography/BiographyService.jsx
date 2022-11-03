import { request } from "../../Base/HTTP"
import HttpMethod from "../../Constants/HttpMethod"

export const getBiographies = async (data) => {
    return await request('/api/biographies', data);
}
export const addBiography = async (data) => {
    return await request('/api/biography', data, HttpMethod.POST);
}
export const editBiography = async (data) => {
    return await request(`/api/biography/${data.id}`, data, HttpMethod.PUT);
}
export const deleteBiography = async (id) => {
    return await request(`/api/biography/${id}`, {}, HttpMethod.DELETE);
}