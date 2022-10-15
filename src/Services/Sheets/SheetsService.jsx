import { request } from "../../Base/HTTP"

export const getSheets = async (data) => {
    return await request(`/api/sheets/`, data);
}