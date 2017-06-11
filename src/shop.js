import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './assets/styles/style.scss'
import Products from './products'
import Cart from './cart'
import { addNewProduct, addToCart, deleteFromCart, changeQuantityCart } from './actions'



class Shop extends Component {
	render() {
		return (
			<main className="main-wrapper">
				<h1>Cart</h1>
				<Cart cart={this.props.cart}
					deleteFromCart={this.props.deleteFromCart}
					changeQuantityCart={this.props.changeQuantityCart}
					/>
				<h1>Products</h1>
				<Products products={this.props.products} addToCart={this.props.addToCart} />
			</main>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.productReducer,
		cart: state.cartReducer,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: bindActionCreators(addToCart, dispatch),
		deleteFromCart: bindActionCreators(deleteFromCart, dispatch),
		changeQuantityCart: bindActionCreators(changeQuantityCart, dispatch),
		addNewProduct: bindActionCreators(addNewProduct, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
