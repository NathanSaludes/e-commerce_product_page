import { useState, useContext } from 'react'
import './header.css';

import CartPreview from '../CartPreview/CartPreview.jsx'

import { CartContext } from "../../contexts/CartContext.js";

function Header() {

  const { cartItemCount, toggleCart } = useContext(CartContext);

  return (
    <header>
      <div className="left">
        <a href="#" className="logo">
          <img src="/images/logo.svg" alt="sneakers" />
        </a>
        <nav>
          <ul>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <button
          className="cart"
          cart-items={cartItemCount}
          onClick={toggleCart}>
        </button>
        <CartPreview />
        <div className="user-avatar">
          <img src="/images/image-avatar.png" alt="user avatar" />
        </div>
      </div>
    </header>
  )
}

export default Header;