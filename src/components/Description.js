import React from "react";

const Description = (props) =>{
    return (

        <div className="descriptionCard">
            <h3 className="title">
                {props.title}
            </h3>

            <div className="description" id="description">
                <h5 className="description-Title">Descripcion :</h5>
                <p className="description-Text">
                    {props.text}
                </p>
            </div>


            <span className="price">
                ${props.precio}
            </span>
        </div>  
    )   
}

export default Description;

