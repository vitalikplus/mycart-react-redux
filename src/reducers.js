import { combineReducers } from 'redux'
import faker from 'faker' //lib to generare product names

const productState = [
		{
			itemName: faker.commerce.productName(),
			itemId: 1,
			itemPrice: 700,
			imageUrl: faker.image.imageUrl(200,150),
			storage: 1		
		},
		{
			itemName: faker.commerce.productName(),
			itemId: 2,
			itemPrice: 1000,
			imageUrl: faker.image.sports(200,150),			
			storage: 3			
		},
		{
			itemName: faker.commerce.productName(),
			itemId: 3,
			itemPrice: 2000,
			imageUrl: faker.image.fashion(200,150),			
			storage: 1			
		}		
	]

const cartState = {
	cartTotal: '',
	cartItems: [
	// {
	// 	itemName: 'ipad',
	// 	itemId: 1,
	// 	price: 700,
	// 	totalPrice: 700,
	// 	quantity: 1,
	// },
	// {
	// 	itemName: 'macbook',
	// 	itemId: 2,
	// 	price: 1000,
	// 	totalPrice: 2000,
	// 	quantity: 2,
	// }	
]}

// const cartTotalState = 200;

const cartReducer = (state = cartState, action) => {
	// console.log('cartReducer = ', action);
	switch (action.type) {
		case  'ADD_TO_CART':
		const elem = state.cartItems.find( element => element.itemId == action.itemId );
		if ( elem ) { //the product exists in the cart
			let newState = { ...state};
			newState.cartItems = state.cartItems.map( element => {
				if (element.itemId == action.itemId) {
					element.quantity++;
					element.totalPrice = Number(element.price) * element.quantity; 
				}
				return element;
			})
			newState = updateTotal(newState);
			return newState
		} else { //the product does not exist in the cart
			let newState = { ...state};
			const newItem = {  
				itemName: action.itemName,
				itemId: action.itemId,
				price: action.price,
				totalPrice: action.price,
				quantity: 1,
			}
			newState.cartItems.push(newItem)
			newState = updateTotal(newState);
			return newState; 
		}			

	case 'CHANGE_QUANTITY_CART':
		let newState3 = { ...state};
		newState3.cartItems = state.cartItems.map( element => {
			if (element.itemId == action.itemId) {
				element.quantity = action.quantity;
				element.totalPrice = Number(element.price) * element.quantity; 				
			}
			return element;
		})
		newState3 = updateTotal(newState3);		
		return newState3;

	case 'DELETE_FROM_CART':
		let newState4 = { ...state};
		newState4.cartItems = state.cartItems.filter( element => element.itemId != action.itemId)
		newState4 = updateTotal(newState4);
		return newState4; 
	
	default: return state
	}
}

//-------------this reducer is not used for now
const productReducer = (state = productState, action) => {
	if( action.type === 'ADD_NEW_PRODUCT' ) {
		return state.concat({
			productName: action.productName
		})
	}
	return state
}


export default combineReducers({
	productReducer,
	cartReducer,
})

function updateTotal(newState) {
		var total = 0;
		newState.cartItems.map( elem => {'total =', total = Number(total) + elem.quantity * elem.price } );
		newState.cartTotal = total;
		return newState;
}