import React from 'react';
import {Mujer} from '../Mujer/Mujer';
import {Hombre} from '../Hombre/Hombre';
import Logo from '../img/logo.jpg';
import './NavBar.css';
import 'boxicons';


function NavBar() {
    return (
        
        <header>
            <div>
                <a href="#"><img src={Logo} alt="logo" width="75" /></a>
            </div>
            <ul>
                <li>
                    <a href="#"><Mujer/></a>
                </li>
                <li>
                    <a href="#"><Hombre/></a>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
        </header>
    );
}

    export default NavBar;