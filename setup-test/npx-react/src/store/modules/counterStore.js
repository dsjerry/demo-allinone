import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: state => {
            state.count += 1
        },
        decrement: state => {
            state.count -= 1
        },
        addCount(state, action) {
            state.count += action.payload
        },
    },
})

const { actions, reducer } = counterSlice

export const { increment, decrement, addCount } = actions
export default reducer
