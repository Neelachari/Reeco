import {legacy_createStore, combineReducers } from "redux"
import { reducer as productReducer } from "./Produx/reducer"

const rootReducer = combineReducers({productReducer})

export const store = legacy_createStore(rootReducer)

