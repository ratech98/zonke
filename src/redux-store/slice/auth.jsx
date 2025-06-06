import { createSlice } from '@reduxjs/toolkit'

const auth = createSlice({
    name: 'auth',
    initialState: {
        name: null,
        phoneNumber: null
    },

    reducers: {
        setName(state, action){
            state.name = action.payload
        },
        setPhoneNumber(state, action){
            state.phoneNumber = action.payload
        },
    }
})

export const {
    setName,
    setPhoneNumber
} = auth.actions

export default auth.reducer