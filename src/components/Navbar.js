import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/shoppingcart" className="brand-logo">Shopping</Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/shoppingcart">Shop</Link></li>
                    <li><Link to="/shoppingcart/cart"><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar