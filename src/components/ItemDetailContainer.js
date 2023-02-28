import React from "react";
import Image from "./Image";
import Description from "./Description";
import "../../src/DetailsItem.css";
import ButtonDetails from "./ButtonDetails";
import fetchSimul from "../productos/fetchSimulation";
import products from "../productos/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const ItemDetailContainer = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {

        fetchSimul(products.filter( flt => flt.id == idItem), 300)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])
    
    return(
        <div className="detailsItem">
            {
                
                datos.map( items => (
                    <>
                        <div className="containerLeft">
                            <Image 
                                imagen={items.imageProduct}
                            />
                        </div>  

                        <div className="containerRight">
                                <Description 
                                    title= {items.title}
                                    text= {items.text}
                                    precio={items.price}
                                />
                                
                            <div className="buttons">
            
                                <ButtonDetails 
                                    txt="Agregar al carrito"
                                />

                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default ItemDetailContainer;