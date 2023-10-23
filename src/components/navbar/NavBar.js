import React from "react";
import "./NavBar.css";
//route
import { Link } from "react-router-dom";
//route params
// import { useParams } from "react-router-dom";
//store
import { useSelector } from "react-redux";

const NavBar = () => {
    const user = useSelector((state) => state.User);
    // const { email } = useParams();

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
            <div className="content-profile">
                <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                />
                <span>{user.name}</span>
            </div>
        </div>
    );
};

export default NavBar;
