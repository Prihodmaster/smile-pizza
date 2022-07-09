import {ADD_ITEM_TO_CART, REPLACE_ITEM_CART, REMOVE_ITEM_CART, CLEAR_CART, GET_TOTAL_PRICE, MINUS_ITEM_CART} from './types';

  export const cartReducer = (state = [], action) => {
    const replaceItem = (id, payload) => state.map( n => n.id === id ? { ...n, total: n.total+1, items: [...n.items, payload] } : n )
    const minusItem = (id, payload) => state.map( n => n.id === id ? { ...n, total: n.total-1, items: payload } : n )
    switch(action.type){
      case ADD_ITEM_TO_CART: return [...state, action.payload]
      case REPLACE_ITEM_CART: return replaceItem(action.id, action.payload)
      case REMOVE_ITEM_CART: return action.payload
      case MINUS_ITEM_CART: return minusItem(action.id, action.payload)
      case CLEAR_CART: return []
      default: return state
    }
  }

  export const totalPriceReducer = (state = 0, action) => {
    switch(action.type){
      case GET_TOTAL_PRICE: return action.payload
      default: return state
    }
  }
