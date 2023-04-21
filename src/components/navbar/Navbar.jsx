import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Button from '../button/Button';

const Navbar = () => {
    return (
        <>
            <nav>
                <h2><Link to="/">GLOWMATH</Link></h2>
                <ul>
                    <li><Button><Link to="/calcul">Calcul</Link></Button></li>
                    <li><Button><Link to="/multiplication">Multiplication</Link></Button></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;