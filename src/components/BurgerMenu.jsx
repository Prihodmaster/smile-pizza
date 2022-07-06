import {NavLink} from 'react-router-dom';



function BurgerMenu({isOpen, clickOpen, links}) {
    return (
        <div className={isOpen ? 'burger-menu active' : 'burger-menu'}>
            <div className='burger-btn' onClick={clickOpen}>
                <span className='burger-btn-span'></span>
            </div>
            <div className='burger-items'>
                <nav>
                    <ul>
                        {
                            links.map(item=><li key={item.id} onClick={clickOpen}><NavLink to={item.link}>{item.title}</NavLink></li>)
                        }
                    </ul>
                </nav>
            </div>
            <div className='burger-overlay' onClick={clickOpen}></div>
        </div>
    );
  }
  
  export default BurgerMenu;