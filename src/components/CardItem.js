import React from "react";
import "../../src/CardItem.css"
import Description from "./Description";
import Image from "./Image";
import ButtonDetails from "./ButtonDetails";
import ButtonCart from "./ButtonCart";
import { Link } from 'react-router-dom';



const CardItem = (props) =>{
    return (

        <div className="cardItems">
            <Image
                imagen= {props.imagen}
            />
            <Description 
                title= {props.title}
                precio ={props.precio}
            />
            
            <div className="buttons-container">
                <Link to={`/item/${props.id }`}>
                    <ButtonDetails 
                    txt="Ver detalles" 
                    />
                </Link>

                <ButtonCart/>
            </div>
        </div>  


)
        
  
}

export default CardItem;