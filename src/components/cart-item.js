import React, { Component } from 'react'

export default class CartItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: this.props.quantity
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

    componentWillReceiveProps (nextProps) {
		this.setState({
			quantity: nextProps.quantity
		});
    }	

	handleInputChange(event) {
		const target = event.target; //input number
		const quantity = target.value;
		const itemId = target.getAttribute("id");
		const name = target.name; //quantity

		this.setState({
			[name]: quantity
		});

		this.props.changeQuantityCart(itemId, quantity)
	}	

	render() {
		function onDeleteHandler( event) {
			const itemId = event.target.getAttribute("id");
			this.props.deleteFromCart(itemId);
		}	

		// function onChangeHandler( event ) {
		// 	const itemId = event.target.getAttribute("id");
		// 	const quantity = event.target.value;
		// 	this.props.changeQuantityCart(itemId, quantity);
		// }
		return (<tr> 
					<td>{this.props.itemName}</td>
					<td>{this.props.price}</td>
					<td>
						<input
							type="number"
							className="cart__input"
							id={this.props.itemId}

							min="1"
							name="quantity"
							value={this.state.quantity}
							onChange={this.handleInputChange}
							/>
					</td>
					<td>{this.props.totalPrice}</td>
					<td>
						<i className="fa fa-times fa-lg"
							aria-hidden="true"
							id={this.props.itemId}
							onClick= { onDeleteHandler.bind(this) }>
						</i>
					</td>
				</tr>
		)
	}
}



