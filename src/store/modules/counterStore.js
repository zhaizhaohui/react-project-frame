import {createSlice} from '@reduxjs/toolkit'

const counterStore = createSlice({
	name: 'counter',
	initialState: {
		count: 0
	},
	reducers: {
		increment(state){
			state.count++
		},
		decrement(state){
			state.count--
		}
	}
})

// 解构出来actionCreater函数
const {increment, decrement} = counterStore.actions

// 获取reducer
const reducer = counterStore.reducer

//以按需导出的方式导出actionCreater
export {increment, decrement}

// 以默认导出的方式导出reducer
export default reducer