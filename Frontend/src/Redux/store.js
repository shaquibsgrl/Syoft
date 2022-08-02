import {legacy_createStore,applyMiddleware,combineReducers} from "redux"

import {productReducer} from "./Products/reducer";
import thunk from 'redux-thunk'
import { cardReducer } from "./Cart/reducer";


const rootReducer=combineReducers({
    product:productReducer,
    cart:cardReducer,
})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

export {store}