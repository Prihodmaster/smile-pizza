// import {GET_POP, GET_PRICE, GET_TITLE} from './types';



  export const cartReducer = (state = [], action) => {
    switch(action.type){
      case 'ADD_ITEM_TO_CART': return [...state, action.payload]
      case 'REMOVE_ITEM_CART': return action.payload
      case 'CLEAR_CART': return []
      default: return state
    }
  }

  export const totalPriceReducer = (state = 0, action) => {
    switch(action.type){
      case 'GET_TOTAL_PRICE': return action.payload
      default: return state
    }
  }

//   export const popSortAction = (payload) => ({type: GET_POP, payload})
//   export const priceSortAction = (payload) => ({type: GET_PRICE, payload})
//   export const titleSortAction = (payload) => ({type: GET_TITLE, payload})