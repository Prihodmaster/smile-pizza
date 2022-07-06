import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Item({item, selectorVisible}) {
    const dicpatch = useDispatch()
    const totalItems = useSelector(state => state.totalItems)
    const cart = useSelector(state => state.cart)
    
    let sizeAllBtn = {
        smallBtb: true,
        mediumBtn: false,
        bigBtn: false
      }
    const [sizeBtn, setSizeBtn] = useState(sizeAllBtn)
    const [itemPrice, setItemPrice] = useState(item.size.small.price)
    const [itemSize, setItemSize] = useState(item.size.small.title)
    const [counter, setCounter] = useState(0)

    const changeSize = size => {
        if(size==='small'){
            setSizeBtn({smallBtb: true, mediumBtn: false, bigBtn: false})
            setItemPrice(item.size.small.price)
            setItemSize(item.size.small.title)
          }
        if(size==='medium'){
            setSizeBtn({smallBtb: false, mediumBtn: true, bigBtn: false})
            setItemPrice(item.size.medium.price)
            setItemSize(item.size.medium.title)
        }
        if(size==='big'){
            setSizeBtn({smallBtb: false, mediumBtn: false, bigBtn: true})
            setItemPrice(item.size.big.price)
            setItemSize(item.size.big.title)
        }
    }
    const addToCart = id =>{
        let carItem = totalItems.find(item=>item.id===id)
        dicpatch({
            type: 'ADD_ITEM_TO_CART', 
            payload: {id: carItem.id, logo: carItem.logo, title: carItem.title, size: itemSize, price: itemPrice}
        })
    }

    const counterItem = () => {
        setCounter(counter+1)
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
                        <li className={sizeBtn.smallBtb ? "active" : ""} onClick={()=>changeSize('small')}>{item.size.small.title}</li>
                        <li className={sizeBtn.mediumBtn ? "active" : ""} onClick={()=>changeSize('medium')}>{item.size.medium.title}</li>
                        <li className={sizeBtn.bigBtn ? "active" : ""} onClick={()=>changeSize('big')}>{item.size.big.title}</li>
                    </ul>
                </div>
                <div className="item-bottom">
                    <b>{itemPrice} грн</b>
                    <button onClick={()=>addToCart(item.id)}>
                        <span>В корзину</span>
                        {
                            counter > 0 && <i>{counter}</i>
                        }
                    </button>
                </div>
            </div>
        </div>


            

    );
  }
  
  export default Item;