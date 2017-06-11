import React, { Component } from 'react'
// import faker from 'faker'
// import productPicture from '../assets/images/empty.jpg'

export default class ProductItem extends Component {
	render() {
		function onAddToCartHandler( event ) {
			const itemId = event.target.getAttribute("data-id");
			const itemPrice = event.target.previousSibling.getAttribute("data-price");
			const itemName = event.target.previousSibling.previousSibling.getAttribute("data-name");
			this.props.addToCart(itemId, itemName, itemPrice);
		}
		return (
						<div className="product-item">
							<img src={this.props.imageUrl} alt=""/>
							<div data-name={this.props.itemName} > {this.props.itemName}</div>
							<div data-price={this.props.itemPrice} > {this.props.itemPrice}</div>
							<button data-id={this.props.itemId} onClick={ onAddToCartHandler.bind(this) }>
								add to cart 
							</button>
						</div>			
		)
	}
}