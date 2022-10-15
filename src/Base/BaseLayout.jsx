import React from "react";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import MainContent from "../Components/Layout/MainContent";

const BaseLayout = (props) => {

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