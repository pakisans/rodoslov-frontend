import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {checkPath} from "../route";
import {getUserFromLocalStorage, isUserLoggedIn} from "./OAuth";
import {useDispatch} from "react-redux";
import {setUser} from "../Slices/AuthSlice";
import Home from "../Pages/Home";

const AuthWrapper = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const needAuth = checkPath(location.pathname);

    useEffect(() => {
        let checkUserData = () => {
            const user = getUserFromLocalStorage();
            dispatch(setUser(user));
            if (!user) {
                if (needAuth) {
                    navigate('/');
                }
            }
        }
        checkUserData();
        window.addEventListener('storage', checkUserData)
        return () => {
            window.removeEventListener('storage', checkUserData)
        }
    }, [])

    const checkPermission = () => {

        if (needAuth && !isUserLoggedIn()) {
            return <Home/>;
        }

        return props.children;
    }

    return checkPermission();
};



export default AuthWrapper;
