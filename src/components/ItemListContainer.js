import React from "react";
import CardItem from "./CardItem";
import fetchSimul from "../productos/fetchSimulation";
import products from "../productos/products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [ datos, setDatos ] = useState ( [] );
    const { idCategory } = useParams();

    
    useEffect (() => {

        if(idCategory === undefined) {
            fetchSimul(products,100)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        } else {
            fetchSimul(products.filter(filter => filter.type === idCategory ),300)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        }
    },[idCategory]) 
        
    


    
    return (
        <>

        <div className="product-container">
        {
            datos.map (product => ( 
                <CardItem 
                id={product.id}
                imagen={product.imageProduct}
                title={product.title}
                desc = {product.text}  
                cantidad={product.stock}
                precio = {product.price}
                />
            ))
        }
        </div>
    
        </>


    )
}

export default ItemListContainer;
