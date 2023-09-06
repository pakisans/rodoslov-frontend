import React, { useEffect } from "react";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import MainContent from "../Components/Layout/MainContent";
import { useLocation, useNavigate } from "react-router-dom";

const BaseLayout = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {   
        if(location.pathname == '/'){
            navigate('/families')
        }
    },[location])
    return <div className="main-container">
        <div className="header-container">
            <Header />
        </div>

        <MainContent>
            {props.children}
        </MainContent>

        <Footer />

    </div>
}

export default BaseLayout;