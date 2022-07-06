import { legacy_createStore as createStore, combineReducers } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {sortReducer} from './sortReducer'
import {itemsReducer} from './itemsReducer'
import {cartReducer} from './cartReducer'
import {totalItemsReducer} from './itemsReducer'
import {totalPriceReducer} from './cartReducer'



const rootReducer = combineReducers({
    totalItems: totalItemsReducer,
    items: itemsReducer,
    sort: sortReducer,
    cart: cartReducer,
    totalPrice: totalPriceReducer
})

export const store = createStore(rootReducer, composeWithDevTools())