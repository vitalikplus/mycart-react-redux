import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import { applyMiddleware } from 'redux'
import Shop from './shop'
import rootReducer from './reducers'
// import { addNewProduct } from './actions'
// import reduxThunk from 'redux-thunk'


// ---------------------------No need of MiddleWares 

// const loggerMiddleware = (store) => {
// 	return function(next) {
// 		return function(action) {
// 			console.log('trigger', action)
// 			let result = next(action)
// 			console.log('store after action', store.getState())
// 			return result
// 		}
// 	}
// }

// const checkUserMW = store => next => action => {
// 	if( action.type === 'CONNECTED_NEW_USER' ) {
// 		let fakeRequest = () => new Promise(resolve => {
// 			setTimeout(() => {
// 				resolve()
// 			}, 2500)
// 		})

// 		fakeRequest().then(() => {
// 			store.dispatch(addNewProduct()); 
// 		})

// 	}

// 	return next(action)
// } 

const store = createStore(
	rootReducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	// applyMiddleware(reduxThunk, loggerMiddleware, checkUserMW)
)

window.store = store

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Shop />
				</div>
			</Provider>
		)
	}
}