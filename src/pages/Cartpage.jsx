import React, { useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../components/CartItem';





function Cartpage({items}) {
  const cart = useSelector(state => state.cart)
  const sum = useSelector(state => state.totalPrice)
  const dicpatch = useDispatch()

  useEffect(() => {
    let sum = 0
    cart.forEach(arr => sum += Number(arr.price))
    dicpatch({type: 'GET_TOTAL_PRICE', payload: sum})
  }, [cart])


  const removeItemCart = id => dicpatch({type: 'REMOVE_ITEM_CART', payload: items.filter(item=>item.id !== id)})

    return (
      <div className="cart-container">
        <div className='cart-header'>
          <h2>Корзина</h2>
          <div className='cart-clear' onClick={()=>dicpatch({type: 'CLEAR_CART'})}>
            <img src='/images/trash.png' alt="logo" />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="cart-items">


          
        {
          items.length > 0 
          ?
          items.map(item=><CartItem key={item.id} item={item} remove={removeItemCart} />) 
          :
          <div className="cart-empty">
            <img src="/images/cart-empty.svg" alt="корзина пустая" />
            <h2>В корзине пока ничего нет</h2>
            <p>Добавьте товар в <b>корзину</b> и оформите заказ.</p>
            <div className="cart-empty-btn"><NavLink to="/"><span>Вернуться назад</span></NavLink></div>
          </div>
        }
          


          
        </div>
        <div className='cart-total'>
          <div className="cart-total-item">Всего товаров:<span>{items.length}</span>шт.</div>
          <div className="cart-total-price">Сумма заказа:<span>{sum}</span>грн.</div>
        </div>
        <div className='cart-bottom-buttons'>
          <div className="cart-back-btn">
            <NavLink to="/">
              <span>Вернуться назад</span>
            </NavLink>
          </div>
          <div className="cart-pay-btn"><span>Оплатить сейчас</span></div>
        </div>
      </div>
    );
  }
  
  export default Cartpage;