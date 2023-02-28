import React from "react";
import { FaShoppingBag } from 'react-icons/fa';

const ButtonCart = () => {
    return (
        <button id="AddCart">
            <FaShoppingBag size={18} style={{ color: "#fff" }}></FaShoppingBag>
        </button>
    )
}

export default ButtonCart;