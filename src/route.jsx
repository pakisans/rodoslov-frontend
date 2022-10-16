import { matchPath, Route, Routes } from "react-router-dom";
import { isUserLoggedIn } from "./Base/OAuth";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import Families from "./Pages/Families/Families";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Welcome from "./Pages/Welcome";

let ROUTES = {
    Welcome: {
        path:'/welcome',
        component: <Welcome />
    },
    Home: {
        path:'/',
        component: <Home />
    },
    Login: {
        path:'/login',
        component : <Login />
    },
    SignUp: {
        path:'/registration',
        component: <SignUp />
    }
}

const userPages = {
    Family: {
        path: '/families',
        component: <Families />
    }
}

const adminPages = {
    AdminPanel: {
        path: '/admin',
        component: <AdminPanel />
    }
}

Object.assign(ROUTES, ROUTES, userPages, adminPages);

export const getRoutes = () => {

    let result = [];

    for (const [key, value] of Object.entries(ROUTES)) {
        result.push(
            <Route exact key={'route-' + key} path={value.path} element={value.component} />
        )
    }

    return <Routes>{result}</Routes>;
}

const getRoute = (path) => {

    for (const [key, value] of Object.entries(ROUTES)) {

        const match = matchPath({
            path: value.path,
            exact: value.exact,
            strict: false
        }, path)
        if (match) {
            return value
        }

    }

    return null;
}

export const checkPath = (path) => {

    let pathObject = getRoute(path);

    if (!pathObject) {
        return true;
    }

    if (pathObject.auth) {
        return !isUserLoggedIn();
    }

    return false;
}