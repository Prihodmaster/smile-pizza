import {useDispatch, useSelector} from 'react-redux';
import {ADD_ITEM_TO_CART, REPLACE_ITEM_CART, SMALL_SIZE, MEDIUM_SIZE, BIG_SIZE} from '../store/types';
import {totalItems} from '../store/itemsReducer'

function Item({item, selectorVisible}) {
    const dicpatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const changeSize = size => {
        size === SMALL_SIZE && dicpatch({
            type: size, 
            payload: {
                size: "small", 
                price: item.size.small.price, 
                title: item.size.small.title
            }, 
            id: item.id
        })
        size === MEDIUM_SIZE && dicpatch({
            type: size, 
            payload: {
                size: "medium", 
                price: item.size.medium.price, 
                title: item.size.medium.title
            }, 
            id: item.id
        })
        size === BIG_SIZE && dicpatch({
            type: size, 
            payload: {
                size: "big", 
                price: item.size.big.price, 
                title: item.size.big.title
            }, 
            id: item.id
        })
    }

    const addToCart = id =>{
        let findItem = totalItems.find(item=>item.id===id)
        let carFindItem = cart.find(item=>item.id===id)
        if(carFindItem === undefined){
            dicpatch({
                type: ADD_ITEM_TO_CART, 
                payload: {
                    id: findItem.id, 
                    logo: findItem.logo, 
                    title: findItem.title, 
                    total: Number(item.stateItem.total)+1, 
                    items: [{
                        size: item.stateItem.title, 
                        price: item.stateItem.price
                    }]
                }
            })
        }else{
            dicpatch({
                type: REPLACE_ITEM_CART, 
                id: findItem.id,
                payload: {
                    size: item.stateItem.title, 
                    price: item.stateItem.price
                }
            })
        }
    }

    return (
        <div className="item">
            <div>
                <div className="item-logo">
                    <img src={item.logo} alt="logo" />
                </div>
                
                <div className="item-title"><b>{item.title}</b></div>
                <div className="item-description">{item.description}</div>
            </div>
            <div>
                <div className={selectorVisible ? 'item-selector' : 'item-selector off'}>
                    <ul>
                        <li className={item.stateItem.size === "small" ? "active" : ""} onClick={()=>changeSize(SMALL_SIZE)}>
                            {item.size.small.title}
                        </li>
                        <li className={item.stateItem.size === "medium" ? "active" : ""} onClick={()=>changeSize(MEDIUM_SIZE)}>
                            {item.size.medium.title}
                        </li>
                        <li className={item.stateItem.size === "big" ? "active" : ""} onClick={()=>changeSize(BIG_SIZE)}>
                            {item.size.big.title}
                        </li>
                    </ul>
                </div>
                <div className="item-bottom">
                    <b>{item.stateItem.price} грн</b>
                    <button onClick={()=>addToCart(item.id)}>
                        <span>В корзину</span>
                        {
                            item.stateItem.total > 0 && <i>{item.stateItem.total}</i>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
  }
  
  export default Item;