import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk'
import chatReducer from '../reducers/chats'

export default function configureStore() {

	const middlewares = [
		thunkMiddleware
	]

	const store = legacy_createStore(
		combineReducers({
			chats: chatReducer
		}), applyMiddleware(...middlewares))

	return store
}