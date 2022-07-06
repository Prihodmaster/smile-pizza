import {GET_POP, GET_PRICE, GET_TITLE} from './types';

  export const sortReducer = (state = {sortBy: 'популярности'}, action) => {
    switch(action.type){
      case GET_POP: return {...state, sortBy: action.payload}
      case GET_PRICE: return {...state, sortBy: action.payload}
      case GET_TITLE: return {...state, sortBy: action.payload}
      default: return state
    }
  }

  export const popSortAction = (payload) => ({type: GET_POP, payload})
  export const priceSortAction = (payload) => ({type: GET_PRICE, payload})
  export const titleSortAction = (payload) => ({type: GET_TITLE, payload})
