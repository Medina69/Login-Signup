import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import word from '../../images/words/Sweetistic.png';
import {Navbar,Nav,Container} from 'react-bootstrap'

const Header = () => {
    const [openDrawer, toggleDrawer] = useState(false);
    const drawerRef = useRef(null);
    useEffect(() => {
        /* Close the drawer when the user clicks outside of it */
        const closeDrawer = event => {
            if (drawerRef.current && drawerRef.current.contains(event.target)) {
                return;
            }

            toggleDrawer(false);
        };

        document.addEventListener("mousedown", closeDrawer);
        return () => document.removeEventListener("mousedown", closeDrawer);
    }, []);
    return (
        <>
        <div className={'navbar'}>
            <Link to={'/'}>
                Home
            </Link>
            <Link to={'/Menu'}>
                Menu
            </Link>

            <Link to={'/Review'}>
                Review
            </Link>
            <div className={'Logo'}>
                <img src={logo} />
                <img src={word} />
            </div>
            <Link to={'/Contact'}>
                Contact
            </Link>
            <Link to={'/LogIn'}>
                Log in
            </Link>
            <Link to={'/SignUp'}>
                Sign up
            </Link>
        </div>
        </>
    );
}


export default Header;