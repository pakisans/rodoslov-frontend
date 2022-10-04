import {request} from './HTTP';
import {setUser} from "../Slices/AuthSlice";
import store from "../store";
import HttpMethod from '../Constants/HttpMethod';

export const login = async (username, password) => {

    clearUserData();

    let data = {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        grant_type: 'password',
        username: username,
        password: password
    };

    return await request('/oauth/v2/token', data, HttpMethod.POST).then((response) => {

            if (!response || !response.ok) {
                return response;
            }

            setTokenToLocalStorage(response.data.token, response.data.token);
            return fetchCurrentUser();
        }
    );
}

export const fetchCurrentUser = () => {
    return request('/api/users/current').then((response) => {

        if(response.data.user) {
            setUserToLocalStorage({
                ...response.data.user
            });
        }
        const {data} = response;
        store.dispatch(setUser({
            ...data.user,
        }));

        return response;
    });

}

export const logout = (navigate) => {
    clearUserData();
    navigate();
    store.dispatch(setUser(null));
}


export const setUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const getUserFromLocalStorage = () => {

    let user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export const setTokenToLocalStorage = (access_token, refresh_token) => {
    localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, access_token);
    localStorage.setItem(process.env.REACT_APP_REFRESH_TOKEN_KEY, refresh_token);
}

export const getRefreshToken = () => {
    return localStorage.getItem(process.env.REACT_APP_REFRESH_TOKEN_KEY);
}

export const getToken = () => {
    return localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
}

export const clearUserData = () => {
    localStorage.removeItem('user');
    clearUserDataLock();
}

export const clearUserDataLock = () => {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY);
    localStorage.removeItem(process.env.REACT_APP_REFRESH_TOKEN_KEY);
}

export const isUserLoggedIn = () => {
    return getUserFromLocalStorage() != null && getToken();
}

export const isUserLocked = () => {
    return getUserFromLocalStorage() && !getToken();
}
