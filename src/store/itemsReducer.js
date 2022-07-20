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

export const totalItems = [
  ...pizzaItems, 
  ...dessertItems, 
  ...chickenItems, 
  ...drinkItems, 
  ...pasteItems, 
  ...saladItems, 
  ...sauceItems
]

const defaultState = {
    pizza: {
      items: pizzaItems,
      itemsByType: pizzaItems,
      itemsByInput: pizzaItems,
      typeBtn: {
        allBtb: true,
        meatBtn: false,
        chickenBtn: false,
        sausageBtn: false,
        spicyBtn: false
      }
    },
    dessert: dessertItems,
    chicken: chickenItems,
    drink: drinkItems,
    paste: pasteItems,
    salad: saladItems,
    sauce: sauceItems
  }

const sortByType = (type, arr) => {
  if(type ===SORT_POP) return [...arr.sort((a, b) => Number(a.id) > Number(b.id)  ? 1 : -1)]
  if(type === SORT_PRICE) return [...arr.sort((a, b) => Number(a.size.small.price) > Number(b.size.small.price)  ? 1 : -1)]
  if(type === SORT_TITLE) return [...arr.sort((a, b) => a.title > b.title  ? 1 : -1)]
}
const findIdSize = (id, payload, arr) => arr.map( n => n.id === id ? { ...n, stateItem: {...n.stateItem, ...payload} } : n )
const findIdTotal = (id, arr) => arr.map( n => n.id === id ? { ...n, stateItem: {...n.stateItem, total: Number(n.stateItem.total)+1} } : n )
const removeTotal = (id, arr) => arr.map( n => n.id === id ? { ...n, stateItem: {...n.stateItem, total: 0} } : n )
const clearTotal = arr => arr.map( n =>{return {...n, stateItem: {...n.stateItem, total: 0}}})
const minusItemCart = (id, arr) => arr.map( n => n.id === id ? { ...n, stateItem: {...n.stateItem, total: Number(n.stateItem.total)-1} } : n )

export const itemsReducer = (state = defaultState, action) => {
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
    const sortByTypeGroup = type => {
      return { 
        pizza: {
          ...state.pizza, 
          items: sortByType(type, state.pizza.items), 
          itemsByType: sortByType(type, state.pizza.itemsByType),
          itemsByInput: sortByType(type, state.pizza.itemsByInput)
        },
        dessert: sortByType(type, state.dessert),
        chicken: sortByType(type, state.chicken),
        drink: sortByType(type, state.drink),
        paste: sortByType(type, state.paste),
        salad: sortByType(type, state.salad),
        sauce: sortByType(type, state.sauce)
    }
    }
    const findIdSizeGroup = (id, payload) => {
      return {
        ...state, 
        drink: findIdSize(id, payload, state.drink),
        pizza: {
          ...state.pizza, 
          items: findIdSize(id, payload, state.pizza.items),
          itemsByType: findIdSize(id, payload, state.pizza.itemsByType),
          itemsByInput: findIdSize(id, payload, state.pizza.itemsByInput)
        }
      }
    }
    const inputGroup = payload => {
      return {
        ...state, 
        pizza: {
          ...state.pizza, 
          itemsByInput: payload
        }
      }
    }
    const filterTypeGroup = (type, payload) => {
      let tempType;
      if(type===ALL){tempType = state.pizza.items}
      if(type===MEAT){tempType = state.pizza.items.filter(item=>item.ingredients.meat === 'yes')}
      if(type===CHICKEN){tempType = state.pizza.items.filter(item=>item.ingredients.chicken === 'yes')}
      if(type===SAUSAGE){tempType = state.pizza.items.filter(item=>item.ingredients.sausage === 'yes')}
      if(type===SPICY){tempType = state.pizza.items.filter(item=>item.ingredients.spicy === 'yes')}
      return {
        ...state, 
        pizza: {
          ...state.pizza, 
          typeBtn: payload, 
          itemsByType: tempType,
          itemsByInput: tempType
        }
     }
    }

    switch(action.type){
        case SMALL_SIZE: return findIdSizeGroup(action.id, action.payload)
        case MEDIUM_SIZE: return findIdSizeGroup(action.id, action.payload)
        case BIG_SIZE: return findIdSizeGroup(action.id, action.payload)
        case SORT_POP: return sortByTypeGroup(action.type)
        case SORT_PRICE: return sortByTypeGroup(action.type)
        case SORT_TITLE: return sortByTypeGroup(action.type)
        case ALL: return filterTypeGroup(action.type, action.payload)
        case MEAT: return filterTypeGroup(action.type, action.payload)
        case CHICKEN: return filterTypeGroup(action.type, action.payload)
        case SAUSAGE: return filterTypeGroup(action.type, action.payload)
        case SPICY: return filterTypeGroup(action.type, action.payload)
        case GET_INPUT: return inputGroup(action.payload)
        case CLEAR_INPUT: return inputGroup(action.payload)
        case ADD_ITEM_TO_CART: return findIdTotalGroup(action.payload.id)
        case REPLACE_ITEM_CART: return findIdTotalGroup(action.id)
        case REMOVE_ITEM_CART: return removeTotalGroup(action.id)
        case MINUS_ITEM_CART: return minusItemCartGroup(action.id)
        case CLEAR_CART: return clearTotalGroup()
      default: return state
    }
  }

  export const allTypeAction = payload => ({type: ALL, payload})
  export const meatTypeAction = payload => ({type: MEAT, payload})
  export const chickenTypeAction = payload => ({type: CHICKEN, payload})
  export const sausageTypeAction = payload => ({type: SAUSAGE, payload})
  export const spiceTypeAction = payload => ({type: SPICY, payload})