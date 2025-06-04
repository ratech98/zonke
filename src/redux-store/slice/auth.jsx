import { createSlice } from '@reduxjs/toolkit'

const auth = createSlice({
    name: 'auth',
    initialState: {
        name: null
    },

    reducers: {
        setName(state, action){
            state.name = action.payload
        }
    }
})

export const {
    setName
} = auth.actions

export default auth.reducer