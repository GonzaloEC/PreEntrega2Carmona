import React from "react";

const Image = (props) => {
    return (
        <div className="img-container">
            <img src={props.imagen} alt="img"></img>
        </div>
    )
}

export default Image;