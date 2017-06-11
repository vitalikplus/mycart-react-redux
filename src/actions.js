import faker from 'faker'

export const addToCart = (itemId, itemName, price) => {
	return {
		type: 'ADD_TO_CART',
		itemId,
		itemName,
		price,
	}
}

export const deleteFromCart = (itemId) => {
	
	return {
			type: 'DELETE_FROM_CART',
			itemId,
		}
}

export const changeQuantityCart = (itemId, quantity) => {
	return {
		type: 'CHANGE_QUANTITY_CART',
		itemId,
		quantity
	}
}

// not used action for now
export const addNewProduct = () => {
	const productName =  `${faker.commerce.productName().toLowerCase()}`
	return dispatch => {
		dispatch({
			type: 'ADD_NEW_PRODUCT',
			productName
		})
	
	}
}
