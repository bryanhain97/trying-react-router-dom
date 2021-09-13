import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';
import { ImLeaf } from "react-icons/im"

export default function Nav() {
    return (
        <nav className="nav-container">
            <div className="nav">
                <a href="/" id="logo" className="nav-logo">
                        <ImLeaf className="logo-icon" />
                        <p className="logo-text">LEAf</p>
                </a>
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li><Link className="list-element" to="/">Home</Link></li>
                        <li><Link className="list-element" to="/shop">Shop</Link></li>
                        <li><Link className="list-element" to="/about">About</Link></li>
                        <li><Link className="list-element" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
