import axios from 'axios';
import HttpMethod from '../Constants/HttpMethod';

export const Axios = ( () => {

    let instance;

    const createInstance = () => {
        return axios.create({
            baseURL: process.env.REACT_APP_BASE_URL
        });
    }

    return {
        getInstance: () => {

            if(!instance) {
                instance = createInstance();
            }

            const token = getToken();

            if(token) {
                instance.defaults.headers.common['Authorization']  = getToken();
            }

            instance.all = axios.all;

            return instance;
        }
    }
})();


export const request = async (url, data = [], method = HttpMethod.GET, options = {}) => {

    try {
        return await connect(url, data, method, options);
    }
    catch {
        if(!isLocalhost()) {
            window.location = '/500'
        }
    }

}

export const connect = async (url, data, method, options) => {

    switch (method) {
        case HttpMethod.GET : {
            return await Axios.getInstance().get(url + makeParametersList(data), options);
        }
        case HttpMethod.POST : return Axios.getInstance().post(url, data, options);
        case HttpMethod.PUT : return Axios.getInstance().put(url, data, options);
        case HttpMethod.PATCH : return Axios.getInstance().patch(url, data, options);
        case HttpMethod.DELETE : return Axios.getInstance().delete(url, options);
    }
}

export const makeParametersList = (parameters) => {
    let parametersList = `?`;

    Object.keys(parameters).map((key, index) => (
        parametersList += parameters[key] ? `${key}=${parameters[key]}&` : ''
    ));

    parametersList = parametersList.slice(0, -1);

    return parametersList === '?' ? '' : parametersList;
}

export const getToken = () => {

    const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);

    if(!token) {
        return null;
    }

    return 'Bearer ' + localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
}

export const getUserFromLocalStorage = () => {

    let user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}
const isLocalhost = () => {
    return window.location.href.includes('localhost')
}

Axios.getInstance().interceptors.response.use(response => {

    response.ok = response.status >= 200 && response.status < 300;

    return response;
}, async error => {
    return error;
});