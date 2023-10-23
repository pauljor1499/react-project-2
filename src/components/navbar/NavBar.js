import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar-content">
            <h2>
                <Link to="/">Ecommerce</Link>
            </h2>
            <ul className="content-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
            <div></div>
        </div>
    );
};

export default NavBar;
