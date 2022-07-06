import {sortByType} from '../App'
import {GET_POP, GET_PRICE, GET_TITLE, ALL, MEAT, CHICKEN, SAUSAGE, SPICY, GET_INPUT, CLEAR_INPUT} from './types';

const pizzaItems = require('../items-json/pizza.json');
const dessertItems = require('../items-json/dessert.json');
const chickenItems = require('../items-json/chicken.json');
const drinkItems = require('../items-json/drink.json');
const pasteItems = require('../items-json/paste.json');
const saladItems = require('../items-json/salad.json');
const sauceItems = require('../items-json/sauce.json');

export const totalItemsReducer = (state = [...pizzaItems, ...dessertItems, ...chickenItems, ...drinkItems, ...pasteItems, ...saladItems, ...sauceItems], action) => {
  switch(action.type){
    // case GET_POP: return {...state, sortBy: action.payload}
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
    switch(action.type){
        case GET_POP: return {
            ...state,    
            pizza: {
              ...state.pizza, 
              items: sortByType(action.type, pizzaItems), 
              itemsByType: sortByType(action.type, state.pizza.itemsByType),
              itemsByInput: sortByType(action.type, state.pizza.itemsByInput)
            },
            dessert: sortByType(action.type, dessertItems),
            chicken: sortByType(action.type, chickenItems),
            drink: sortByType(action.type, drinkItems),
            paste: sortByType(action.type, pasteItems),
            salad: sortByType(action.type, saladItems),
            sauce: sortByType(action.type, sauceItems)
        }
        case GET_PRICE: return {
            ...state,    
            pizza: {
              ...state.pizza, 
              items: sortByType(action.type, pizzaItems), 
              itemsByType: sortByType(action.type, state.pizza.itemsByType),
              itemsByInput: sortByType(action.type, state.pizza.itemsByInput)
            },
            dessert: sortByType(action.type, dessertItems),
            chicken: sortByType(action.type, chickenItems),
            drink: sortByType(action.type, drinkItems),
            paste: sortByType(action.type, pasteItems),
            salad: sortByType(action.type, saladItems),
            sauce: sortByType(action.type, sauceItems)
        }
        case GET_TITLE: return {
            ...state,    
            pizza: {
              ...state.pizza, 
              items: sortByType(action.type, pizzaItems), 
              itemsByType: sortByType(action.type, state.pizza.itemsByType),
              itemsByInput: sortByType(action.type, state.pizza.itemsByInput)
            },
            dessert: sortByType(action.type, dessertItems),
            chicken: sortByType(action.type, chickenItems),
            drink: sortByType(action.type, drinkItems),
            paste: sortByType(action.type, pasteItems),
            salad: sortByType(action.type, saladItems),
            sauce: sortByType(action.type, sauceItems)
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
          itemsByType: 
          state.pizza.items.filter(item=>item.ingredients.sausage === 'yes'),
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
      default: return state
    }
  }

  export const allTypeAction = (payload) => ({type: ALL, payload})
  export const meatTypeAction = (payload) => ({type: MEAT, payload})
  export const chickenTypeAction = (payload) => ({type: CHICKEN, payload})
  export const sausageTypeAction = (payload) => ({type: SAUSAGE, payload})
  export const spiceTypeAction = (payload) => ({type: SPICY, payload})