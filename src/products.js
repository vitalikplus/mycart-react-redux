import React, { Component } from 'react'
import ProductItem from './components/product-item'

export default class ProductList extends Component {
	render() {
		// console.log('ProductList props = ', this.props);
		return (
			<div className="products">
					{this.props.products.map(p => {
						return <ProductItem 
							key={p.itemId}
							itemName = {p.itemName}
							itemPrice = {p.itemPrice}
							itemId = {p.itemId}
							imageUrl = {p.imageUrl}
							addToCart = {this.props.addToCart}
							/> 
					})}
			</div>
		)
	}
}