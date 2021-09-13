import React from 'react';
import './shop.css';
import { Link } from 'react-router-dom';

export default function Shop() {
    return (
        <div className="shop-container">
            <div className="shop-nav">
                <h1>Everything you need</h1>
                <ul className="shop-nav-list">
                    <li>
                        <Link className="shop-nav-element" to="/shop/beanies">Beanies</Link>
                    </li>
                    <li>
                        <Link className="shop-nav-element" to="/shop/jackets">Jackets</Link>
                    </li>
                    <li>
                        <Link className="shop-nav-element" to="/shop/pants">Pants</Link>
                    </li>
                    <li>
                        <Link className="shop-nav-element" to="/shop/shoes">Shoes</Link>
                    </li>
                </ul>
            </div>
            <div className="shop-random">
                <h2>some random stuff</h2>
            </div>
        </div>
    )
}
