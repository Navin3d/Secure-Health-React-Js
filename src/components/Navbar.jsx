import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import "../styles/components/Navbar.component.style.css";


const Navbar = () => {

    let navigate = useNavigate();
    const [cookies, setCookies] = useCookies(["Authorization", "Is_Doctor", "User_Id", "Refresh_Token", "Logged-In"]);
    const [hasLoggedIn, setLoggedIn] = useState(true);

    const navigateToProfile = () => {
        cookies.Doctor_Id ? navigate(`/doctor/${cookies.Doctor_Id}`) : navigate(`/patient/profile`);
    }

    const handleLogout = () => {
        console.log("pressed")
        setCookies("Authorization", "");
        setCookies("Refresh_Token", "");
        setCookies("Doctor_Id", "");
        setCookies("Patient_Id", "");
        setCookies("Logged-In", false);
        setLoggedIn(cookies["Logged-In"]);
        console.log(cookies["Logged-In"]);
    }

    useEffect(() => {
        console.log(cookies["Logged-In"]);
        setLoggedIn(cookies["Logged-In"]);
    });

    return (
        <div>
            <nav>
                <div class="menu">
                    <p onClick={() => { navigate("/") }} class="website_name">Secure Health</p>
                    <div class="menu_links">
                        <a class="link" href="/">Home</a>
                        <a class="link" href="#stats">Stats</a>
                        {
                            hasLoggedIn ? (
                                <Fragment>
                                    <a class="link" href="/doctor/list">Doctors</a>
                                    <a class="link" onClick={navigateToProfile}>Profile</a>
                                    <a class="link" onClick={handleLogout}>Log-Out</a>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <a class="link" href="#about">About</a>
                                    <a class="link" href="/login">Login</a>
                                </Fragment>
                            )
                        }
                    </div>
                    <div class="menu_icon">
                        <span class="icon"></span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
