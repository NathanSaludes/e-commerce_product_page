import { useContext } from "react";
import './cart-preview.css'

import { CartContext } from '../../contexts/CartContext.js';


function CartPreview() {

	const { cartItems, cartIsEmpty, removeCartItem, cartOpen } = useContext(CartContext);

	return (
		<div className="[ shadow-2xl ][ cart-preview ]" data-state={cartOpen ? "open" : "closed"}>
			<div className="header">
				<span>Cart</span>
			</div>
			<div className="body">
				{
					cartIsEmpty
						? <span className="empty-cart">Your cart is empty.</span>
						: cartItems.map(item => {
							const netPrice = item.unitPrice * item.quantity;

							return (
								<div className="cart-item" key={item.id}>
									<a href="#" className="item-thumbnail">
										<img src={`/images/${item.image}`} alt="cart-product-1" />
									</a>
									<div className="item-details">
										<a href="#" className="name">{item.productName}</a>
										<span className="unit-price">${item.unitPrice.toFixed(2)}</span> x <span className="quantity">{item.quantity}</span> <span className="net-price">${netPrice.toFixed(2)}</span>
									</div>
									<button className="remove-item" onClick={() => removeCartItem(item.id)}></button>
								</div>
							)
						})
				}
				{
					cartIsEmpty
						? <></>
						: <button className="checkout">Checkout</button>
				}
			</div>
		</div>
	)
}

export default CartPreview