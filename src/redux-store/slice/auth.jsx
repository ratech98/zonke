import { createSlice } from '@reduxjs/toolkit'

const auth = createSlice({
    name: 'auth',
    initialState: {
        name: null,
        phoneNumber: null,
        personalDetails: null
    },

    reducers: {
        setName(state, action){
            state.name = action.payload
        },
        setPhoneNumber(state, action){
            state.phoneNumber = action.payload
        },
        setPersonalDetails(state, action){
            state.personalDetails = action.payload
        },
    }
})

export const {
    setName,
    setPhoneNumber,
    setPersonalDetails
} = auth.actions

export default auth.reducer