import React, { Component } from "react"
import { Link } from 'react-router-dom'

import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import Cart from './svg/shopping-cart-solid.svg';

import './css/Header.css';

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="menu">
                    <img src={Menu} width="20" />
                </div>
                <div className="logo">
                    <h1><Link to="/">Store</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Product</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Login</Link></li>
                        <li className="close"><img src={Close} width="20" /></li>
                    </ul>
                    <div className="nav-cart">
                        <span>0</span>
                        <Link to="/cart">
                            <img src={Cart} width="20" />
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;