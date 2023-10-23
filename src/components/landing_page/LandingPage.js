import React from "react";
import "./LandingPage.css";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");

    const changeEmail = (event) => {
        setEmail(event.target.value);
    };

    const changePassword = (event) => {
        setPasword(event.target.value);
    };

    const clickLogin = () => {
        navigate(`/products/${email}`);
        console.log("Login!");
    };

    return (
        <div className="landing-page-content">
            <div className="content-left"></div>
            <div className="content-right">
                <div className="form-content">
                    <span>Email</span>
                    <input value={email} onChange={changeEmail} type="text" placeholder="Enter email" />
                    <br />
                    <span>Password</span>
                    <input value={password} onChange={changePassword} type="text" placeholder="Enter password" />
                    <br />
                    <button onClick={clickLogin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
