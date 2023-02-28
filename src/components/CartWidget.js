import React from "react";
import { FaShoppingBag } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <>
        <FaShoppingBag size={20} style={{ color: "#fff" }}></FaShoppingBag>
        <div className="numerito-carrito">
            <p>1</p>
        </div>
        </>    
    )
}

export default CartWidget;