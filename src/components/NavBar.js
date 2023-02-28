import React, { useState } from "react";
import Brand from "./Brand";
import CartWidget from "./CartWidget";
import { FaTimes, FaBars,} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick (!click);
 

    return(
        <div className= "navContainer">

            <div className="hamburger" onClick = {handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }}/>
                )}
            </div>

            <div className="brandContainer">
                <Link to ="/">
                    <Brand/>
                </Link>
            </div>
            <div className= "menu-center">
                
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                        
                    <li>
                        <Link to="category/camisa">
                            Camisas
                        </Link>
                    </li>

                    <li>
                        <Link to="category/buzo">
                            Buzos
                        </Link>
                    </li>

                    <li>
                        <Link to="category/campera">
                            Campera
                        </Link>
                    </li>

                    <li>
                        <Link to="category/calzado">
                            Calzado
                        </Link>
                    </li>

                    <li>
                        <Link to="category/perfume">
                        Perfumes
                        </Link>
                    </li>
                </ul>
            </div>  

            <div className="carrito">
                <CartWidget/>
            </div>  
        </div>
    )
}

export default NavBar;