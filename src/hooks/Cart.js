import { useState } from "react";

const products = [
	{
		id: 1,
		image: "image-product-1-thumbnail.jpg",
		productName: "Fall Limited Edition Sneakers",
		unitPrice: 125.00
	}
]

export function useCart() {
	const [cartItems, setCartItems] = useState([]);
	const [cartOpen, setCartOpen] = useState(false);

	const addToCart = (id, quantity) => {
		if (id && (quantity > 0)) {

			let item = products.find(item => item.id === id);
			item.quantity = quantity;

			if (cartItems.find(item => item.id === id)) {
				let updatedList = cartItems.filter(item => item.id !== id);
				updatedList.push(item);
				setCartItems(updatedList);
				return;
			}

			setCartItems(prev => [...prev, item]);
			return;
		}
	}

	const removeCartItem = (id) => {
		setCartItems(prev => prev.filter(item => (item.id !== id)))
	}

	const toggleCart = () => {
		setCartOpen(prev => !prev)
	}

	return {
		cartItems,
		cartItemCount: cartItems.length,
		cartIsEmpty: ((cartItems.length < 1) ? true : false),
		removeCartItem,
		addToCart,
		cartOpen,
		toggleCart
	};
}