import {SORT_POP, SORT_PRICE, SORT_TITLE} from './types';

  export const sortReducer = (state = {sortBy: 'популярности'}, action) => {
    switch(action.type){
      case SORT_POP: return {...state, sortBy: action.payload}
      case SORT_PRICE: return {...state, sortBy: action.payload}
      case SORT_TITLE: return {...state, sortBy: action.payload}
      default: return state
    }
  }