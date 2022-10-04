import { request } from "../../Base/HTTP"
import HttpMethod from "../../Constants/HttpMethod"

export  const registration = async (data) => {
    return await request('/api/users', data, HttpMethod.POST);
}

export async function activateUser(token) {
    return await request("/api/users/activate/" + token, {}, HttpMethod.PATCH);
}