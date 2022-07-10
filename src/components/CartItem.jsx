import {useDispatch} from 'react-redux';
import {REPLACE_ITEM_CART, MINUS_ITEM_CART} from '../store/types';

function CartItem({item, remove}) {
    const dicpatch = useDispatch()
    let sum = 0
    item.items.forEach(arr => sum += Number(arr.price))
    const plusCartItem = () =>{
        dicpatch({
            type: REPLACE_ITEM_CART, 
            id: item.id,
            payload: {size: item.items[item.items.length-1].size, price: item.items[item.items.length-1].price}
        })
    }
    const minusCartItem = () => {
        if(item.total > 1){
            item.items.pop()
            dicpatch({
                type: MINUS_ITEM_CART, 
                id: item.id,
                payload: item.items
            })
        }
    }
    return (
        <div className='cart-item'>
            <div className='cart-item-logo'><img src={item.logo} alt="logo" /></div>
            <div className='cart-item-info'><h3>{item.title}</h3><p>{item.items.map(n=>n.size+' ')}</p></div>
            <div className='cart-item-count'>
                <div className='cart-item-circle' onClick={()=>minusCartItem()}><span>-</span></div>
                <b>{item.total}</b>
                <div className='cart-item-circle' onClick={()=>plusCartItem()}><span>+</span></div>
            </div>
            <div className='cart-item-price'><span>{sum}</span>грн</div>
            <div className='cart-item-remove'><div className='cart-item-circle' onClick={()=>remove(item.id)}><span>✖</span></div></div>
        </div>
    );
  }
  
  export default CartItem