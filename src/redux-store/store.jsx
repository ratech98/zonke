// import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import 
{
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore
} 
from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import auth from './slice/auth'


const persistConfig = {
    key: 'root',
    version: 1,
    storage: localStorage
}

const rootReducer = combineReducers({
    auth: auth
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const reduxStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
        serializableCheck: false
        // {
        //     ignoredAction: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        // }
    })
})


export const persistor = persistStore(reduxStore); 

export default reduxStore