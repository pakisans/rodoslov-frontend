import { Route, Routes } from "react-router-dom";
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
        path:'/home',
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
    
}

Object.assign(ROUTES, ROUTES);

export const getRoutes = () => {

    let result = [];

    for (const [key, value] of Object.entries(ROUTES)) {
        result.push(
            <Route exact key={'route-' + key} path={value.path} element={value.component} />
        )
    }

    return <Routes>{result}</Routes>;
}