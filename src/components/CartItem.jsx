

function CartItem({item, remove}) {
    return (
        <div className='cart-item'>
            <div className='cart-item-logo'><img src={item.logo} alt="logo" /></div>
            <div className='cart-item-info'><h3>{item.title}</h3><p>{item.size}</p></div>
            <div className='cart-item-count'>
                <div className='cart-item-circle'><span>-</span></div>
                <b>1</b>
                <div className='cart-item-circle'><span>+</span></div>
            </div>
            <div className='cart-item-price'><span>{item.price}</span>грн</div>
            <div className='cart-item-remove'><div className='cart-item-circle' onClick={()=>remove(item.id)}><span>✖</span></div></div>
        </div>
    );
  }
  
  export default CartItem;