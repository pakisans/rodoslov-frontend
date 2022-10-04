import React from "react";

const MainContent = (props) => {
    console.log(props.children)
    return <div className="middle-container">
            {props.children}
        </div>
}

export default MainContent;