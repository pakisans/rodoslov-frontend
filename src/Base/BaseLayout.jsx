import React from "react";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import MainContent from "../Components/Layout/MainContent";

const BaseLayout = (props) => {

    return <div className="main-container">
        <div className="header-container">
            <Header />
        </div>
        <div className="content-container">
            <MainContent>
                {props.children}
            </MainContent>
        </div>
        <div className="footer-container">
            <Footer />
        </div>
    </div>
}

export default BaseLayout;