import React, { Component } from 'react'
import CartItem from './components/cart-item'

export default class Cart extends Component {
	render() {
		// console.log('Cart props = ', this.props);
		return (
			<div className="cart">
				<table>
					<thead>
						<tr>
							<td>Item</td>
							<td>Price</td>
							<td>Quantity</td>
							<td>Total price</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						{this.props.cart.cartItems.map(p => {
							return <CartItem key={p.itemId}
								itemId={p.itemId}
								itemName={p.itemName}
								price={p.price}
								totalPrice={p.totalPrice}
								quantity={p.quantity}
								deleteFromCart={this.props.deleteFromCart}
								changeQuantityCart={this.props.changeQuantityCart}
							/>
						})}
					</tbody>
				</table>
				<h3 className="cart__total">Total {this.props.cart.cartTotal}</h3>
			</div>
		)
	}
}
