import {NavLink} from 'react-router-dom';

function Notfoundpage() {
    return (
      <div className='cart-empty'>
        <img src="/images/cart-empty.svg" alt="корзина пустая" />
        <h2>Страница не найдена</h2>
        <div className="cart-back-btn cart-empty-btn"><NavLink to="/"><span>Вернуться на главную</span></NavLink></div>
      </div>
    );
  }
  
  export default Notfoundpage;