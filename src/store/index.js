import {configureStore} from '@reduxjs/toolkit'

import counterReducer from './modules/counterStore.js'

const store = configureStore({
	reducer: {
		counter: counterReducer
	}
})

export default store