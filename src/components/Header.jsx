import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

const links = [
    {title: 'Пицца', link: '/', id: '1'}, 
    {title: 'Десерты', link: '/dessert', id: '2'}, 
    {title: 'Курица', link: '/chicken', id: '3'}, 
    {title: 'Напитки', link: '/drink', id: '4'}, 
    {title: 'Паста', link: '/paste', id: '5'},  
    {title: 'Салаты', link: '/salad', id: '6'}, 
    {title: 'Соусы', link: '/sauce', id: '7'}
]
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cart = useSelector(state => state.cart)
    const sum = useSelector(state => state.totalPrice)
    const dicpatch = useDispatch()

    useEffect(() => {
        let sum = 0
        cart.forEach(n => n.items.forEach(i => sum += Number(i.price)))
        dicpatch({type: 'GET_TOTAL_PRICE', payload: sum})
      }, [cart])

    const toggleMenuMode = () => setIsMenuOpen(!isMenuOpen)
    return (
        <header>
            <div className='header-container'>
                <div className='header-logo'>
                <NavLink to="/">
                    <img src='/images/logo.png' alt="logo" />
                </NavLink>
                </div>
                <div className='header-menu'>
                    <nav>
                        <ul>
                            {
                                links.map(item=><li key={item.id}><NavLink to={item.link}>{item.title}</NavLink></li>)
                            }
                        </ul>
                    </nav>
                </div>
                <div className='header-right'>
                    <NavLink to="/cart">
                        <div className='cart'>
                            <span>{sum} грн</span>
                            <div className='cart-delimiter'></div>
                            <img src="/images/cart.png" alt="cart" />
                            <span>{cart.length}</span>
                        </div>
                    </NavLink>
                    <BurgerMenu isOpen={isMenuOpen} clickOpen={toggleMenuMode} links={links} />
                </div>
            </div>
            <div className='header-menu-bottom'>
                    <nav>
                        <ul>
                            {
                                links.map(item=><li key={item.id}><NavLink to={item.link}>{item.title}</NavLink></li>)
                            }
                        </ul>
                    </nav>
                </div>
        </header>
    );
  }

  export default Header;