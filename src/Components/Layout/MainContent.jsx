import React from "react";

const MainContent = (props) => {
    return <div className="middle-container">
            {props.children}
        </div>
}

export default MainContent;