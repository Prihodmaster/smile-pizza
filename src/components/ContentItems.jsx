import Item from './Item';

function ContentItems({items, selectorVisible}) {
    return (
        <div className="content-items">
            {
                items.length > 0 ? 
                items.map(item=><Item key={item.id} item={item} selectorVisible={selectorVisible} />)
                :
                <div className='content-items-empty'>Товаров нет<img src="/images/cart-empty.svg" alt="товаров нет" /></div>
            }
            
        </div>
    );
  }
  
  export default ContentItems;