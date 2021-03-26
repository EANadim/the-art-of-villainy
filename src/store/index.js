import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import header from './reducers/header';
const reducer = combineReducers({
    header,
})
const store = configureStore({
    reducer,
})
export default store;