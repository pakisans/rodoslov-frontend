import { request } from "../../Base/HTTP"
import HttpMethod from "../../Constants/HttpMethod"

export const addStructure = async (data) => {
    return await request('/api/structure', exportData(data), HttpMethod.POST);
}
export const editStructure = async (data) => {
    return await request(`/api/structure/${data.id}`, exportData(data), HttpMethod.PUT);
}

export const getRootElement = async (data) => {
    return await request('/api/structure', data);
}

export const getChildrens = async (data) => {
    return await request('/api/childrens', {id:data?.children?.id ? data.children.id : data?.id, parentId: data?.children?.mainId, family: data?.children?.family?.id ? data.children.family.id : data?.family?.id});
}
export const getStructures = async (data) => {
    return await request('/api/structures', data);
}

export const getParentAndSlibings = async (data) => {
    return await request('/api/parent-and-slibings', transformData(data))
}

export const deleteStructure = async (id) => {
    return await request(`/api/structure/${id}`, {}, HttpMethod.DELETE);
}

const transformData = (data) => {
    return {
        familyId: data.family ? data.family.id : null,
        personId: data.id ? data.id : null
    }
}

const exportData = (data) => {
    return {
        ...data, 
        familyId: data.family ? data.family.id : null,
        superiorId: data.superior ? data.superior.id : null,
        subordinateId: data.subordinate ? data.subordinate.id : null,
    }
}