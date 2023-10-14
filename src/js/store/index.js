import { legacy_createStore } from "redux";

export default function configureStore() {
	const store = legacy_createStore(() => {
		return {
			message: 'Hello World',
			data1: 'just some testing data',
			data2: 'just some testing data',
		}
	})

	return store
}