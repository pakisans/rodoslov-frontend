import { request } from "../../Base/HTTP";

export const getSearchTerms = async (query) => {
    return await request(`/api/search`, {query:query});
}
