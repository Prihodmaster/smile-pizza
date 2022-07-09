import {sortByType} from '../App'
import {
  SORT_POP, SORT_PRICE, SORT_TITLE, ALL, MEAT, CHICKEN, SAUSAGE, SPICY, 
  GET_INPUT, CLEAR_INPUT, 
  SMALL_SIZE, MEDIUM_SIZE, BIG_SIZE, 
  ADD_ITEM_TO_CART, REPLACE_ITEM_CART, REMOVE_ITEM_CART, CLEAR_CART, MINUS_ITEM_CART
} from './types';

const pizzaItems = require('../items-json/pizza.json');
const dessertItems = require('../items-json/dessert.json');
const chickenItems = require('../items-json/chicken.json');
const drinkItems = require('../items-json/drink.json');
const pasteItems = require('../items-json/paste.json');
const saladItems = require('../items-json/salad.json');
const sauceItems = require('../items-json/sauce.json');

const defaultTotalItemsState = [
  ...pizzaItems, 
  ...dessertItems, 
  ...chickenItems, 
  ...drinkItems, 
  ...pasteItems, 
  ...saladItems, 
  ...sauceItems
]
export const totalItemsReducer = (state = defaultTotalItemsState, action) => {
  switch(action.type){
    default: return state
  }
}

const typeAllBtn = {
  allBtb: true,
  meatBtn: false,
  chickenBtn: false,
  sausageBtn: false,
  spicyBtn: false
}
const defaultState = {
    pizza: {
      items: pizzaItems,
      itemsByType: pizzaItems,
      itemsByInput: pizzaItems,
      typeBtn: typeAllBtn
    },
    dessert: dessertItems,
    chicken: chickenItems,
    drink: drinkItems,
    paste: pasteItems,
    salad: saladItems,
    sauce: sauceItems
  }
  export const itemsReducer = (state = defaultState, action) => {
    const findIdSize = (id, payload, arr) => arr.map( n => n.id === id ? { ...n, stateItem: {...n.stateItem, ...payload} } : n )
    const findIdTotal = (id, arr) => arr.map( n => n.id === id ? { ...n, stateItem: {...n.stateItem, total: Number(n.stateItem.total)+1} } : n )
    const removeTotal = (id, arr) => arr.map( n => n.id === id ? { ...n, stateItem: {...n.stateItem, total: 0} } : n )
    const clearTotal = arr => arr.map( n =>{return {...n, stateItem: {...n.stateItem, total: 0}}})
    const minusItemCart = (id, arr) => arr.map( n => n.id === id ? { ...n, stateItem: {...n.stateItem, total: Number(n.stateItem.total)-1} } : n )

    const findIdTotalGroup = id => {
      return {
        pizza: {
          ...state.pizza, 
          items: findIdTotal(id, state.pizza.items),
          itemsByType: findIdTotal(id, state.pizza.itemsByType),
          itemsByInput: findIdTotal(id, state.pizza.itemsByInput)
        },
        dessert: findIdTotal(id, state.dessert),
        chicken: findIdTotal(id, state.chicken),
        drink: findIdTotal(id, state.drink),
        paste: findIdTotal(id, state.paste),
        salad: findIdTotal(id, state.salad),
        sauce: findIdTotal(id, state.sauce)
      }
    }
    const removeTotalGroup = id => {
      return {
        pizza: {
          ...state.pizza, 
          items: removeTotal(id, state.pizza.items),
          itemsByType: removeTotal(id, state.pizza.itemsByType),
          itemsByInput: removeTotal(id, state.pizza.itemsByInput)
        },
        dessert: removeTotal(id, state.dessert),
        chicken: removeTotal(id, state.chicken),
        drink: removeTotal(id, state.drink),
        paste: removeTotal(id, state.paste),
        salad: removeTotal(id, state.salad),
        sauce: removeTotal(id, state.sauce)
      }
    }
    const clearTotalGroup = () => {
      return {
        pizza: {
          ...state.pizza, 
          items: clearTotal(state.pizza.items),
          itemsByType: clearTotal(state.pizza.itemsByType),
          itemsByInput: clearTotal(state.pizza.itemsByInput)
        },
        dessert: clearTotal(state.dessert),
        chicken: clearTotal(state.chicken),
        drink: clearTotal(state.drink),
        paste: clearTotal(state.paste),
        salad: clearTotal(state.salad),
        sauce: clearTotal(state.sauce)
      }
    }
    const minusItemCartGroup = id => {
      return {
        pizza: {
          ...state.pizza, 
          items: minusItemCart(id, state.pizza.items),
          itemsByType: minusItemCart(id, state.pizza.itemsByType),
          itemsByInput: minusItemCart(id, state.pizza.itemsByInput)
        },
        dessert: minusItemCart(id, state.dessert),
        chicken: minusItemCart(id, state.chicken),
        drink: minusItemCart(id, state.drink),
        paste: minusItemCart(id, state.paste),
        salad: minusItemCart(id, state.salad),
        sauce: minusItemCart(id, state.sauce)
      }
    }

    switch(action.type){
        case SMALL_SIZE: return {
          ...state, 
          drink: findIdSize(action.id, action.payload, state.drink),
          pizza: {
            ...state.pizza, 
            items: findIdSize(action.id, action.payload, state.pizza.items),
            itemsByType: findIdSize(action.id, action.payload, state.pizza.itemsByType),
            itemsByInput: findIdSize(action.id, action.payload, state.pizza.itemsByInput)
          }
        }
        case MEDIUM_SIZE: return {
          ...state, 
          drink: findIdSize(action.id, action.payload, state.drink),
          pizza: {
            ...state.pizza, 
            items: findIdSize(action.id, action.payload, state.pizza.items),
            itemsByType: findIdSize(action.id, action.payload, state.pizza.itemsByType),
            itemsByInput: findIdSize(action.id, action.payload, state.pizza.itemsByInput)
          }
        }
        case BIG_SIZE: return {
          ...state, 
          drink: findIdSize(action.id, action.payload, state.drink),
          pizza: {
            ...state.pizza, 
            items: findIdSize(action.id, action.payload, state.pizza.items),
            itemsByType: findIdSize(action.id, action.payload, state.pizza.itemsByType),
            itemsByInput: findIdSize(action.id, action.payload, state.pizza.itemsByInput)
          }
        }
        case SORT_POP: return { 
            pizza: {
              ...state.pizza, 
              items: sortByType(action.type, state.pizza.items), 
              itemsByType: sortByType(action.type, state.pizza.itemsByType),
              itemsByInput: sortByType(action.type, state.pizza.itemsByInput)
            },
            dessert: sortByType(action.type, state.dessert),
            chicken: sortByType(action.type, state.chicken),
            drink: sortByType(action.type, state.drink),
            paste: sortByType(action.type, state.paste),
            salad: sortByType(action.type, state.salad),
            sauce: sortByType(action.type, state.sauce)
        }
        case SORT_PRICE: return {
            pizza: {
              ...state.pizza, 
              items: sortByType(action.type, state.pizza.items), 
              itemsByType: sortByType(action.type, state.pizza.itemsByType),
              itemsByInput: sortByType(action.type, state.pizza.itemsByInput)
            },
            dessert: sortByType(action.type, state.dessert),
            chicken: sortByType(action.type, state.chicken),
            drink: sortByType(action.type, state.drink),
            paste: sortByType(action.type, state.paste),
            salad: sortByType(action.type, state.salad),
            sauce: sortByType(action.type, state.sauce)
        }
        case SORT_TITLE: return {   
            pizza: {
              ...state.pizza, 
              items: sortByType(action.type, state.pizza.items), 
              itemsByType: sortByType(action.type, state.pizza.itemsByType),
              itemsByInput: sortByType(action.type, state.pizza.itemsByInput)
            },
            dessert: sortByType(action.type, state.dessert),
            chicken: sortByType(action.type, state.chicken),
            drink: sortByType(action.type, state.drink),
            paste: sortByType(action.type, state.paste),
            salad: sortByType(action.type, state.salad),
            sauce: sortByType(action.type, state.sauce)
        }
        case ALL: return {
          ...state, 
          pizza: {
            ...state.pizza, 
            typeBtn: action.payload, 
            itemsByType: state.pizza.items,
            itemsByInput: state.pizza.items,
          }
        }
        case MEAT: return {
          ...state, 
          pizza: {
            ...state.pizza, 
            typeBtn: action.payload, 
            itemsByType: state.pizza.items.filter(item=>item.ingredients.meat === 'yes'),
            itemsByInput: state.pizza.items.filter(item=>item.ingredients.meat === 'yes')
          }
       }
        case CHICKEN: return {
          ...state, 
          pizza: {
            ...state.pizza, 
            typeBtn: action.payload, 
            itemsByType: state.pizza.items.filter(item=>item.ingredients.chicken === 'yes'),
            itemsByInput: state.pizza.items.filter(item=>item.ingredients.chicken === 'yes')
          }
       }
        case SAUSAGE: return {
          ...state, 
          pizza: {
            ...state.pizza, 
          typeBtn: action.payload, 
          itemsByType: state.pizza.items.filter(item=>item.ingredients.sausage === 'yes'),
          itemsByInput: state.pizza.items.filter(item=>item.ingredients.sausage === 'yes')
          }
        }
        case SPICY: return {
          ...state, 
          pizza: {
            ...state.pizza, 
            typeBtn: action.payload, 
            itemsByType: state.pizza.items.filter(item=>item.ingredients.spicy === 'yes'),
            itemsByInput: state.pizza.items.filter(item=>item.ingredients.spicy === 'yes')
          }
         }
        case GET_INPUT: return {
          ...state, 
          pizza: {
            ...state.pizza, 
            itemsByInput: action.payload
          }
        }
        case CLEAR_INPUT: return {
          ...state, 
          pizza: {
            ...state.pizza, 
            itemsByInput: action.payload
          }
        }
        case ADD_ITEM_TO_CART: return findIdTotalGroup(action.payload.id)
        case REPLACE_ITEM_CART: return findIdTotalGroup(action.id)
        case REMOVE_ITEM_CART: return removeTotalGroup(action.id)
        case MINUS_ITEM_CART: return minusItemCartGroup(action.id)
        case CLEAR_CART: return clearTotalGroup()
      default: return state
    }
  }

  export const allTypeAction = (payload) => ({type: ALL, payload})
  export const meatTypeAction = (payload) => ({type: MEAT, payload})
  export const chickenTypeAction = (payload) => ({type: CHICKEN, payload})
  export const sausageTypeAction = (payload) => ({type: SAUSAGE, payload})
  export const spiceTypeAction = (payload) => ({type: SPICY, payload})