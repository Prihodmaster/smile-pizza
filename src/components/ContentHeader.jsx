import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SORT_POP, SORT_PRICE, SORT_TITLE} from '../store/types';

function ContentHeader({title}) {
  const [isOpen, setIsOpen] = useState(false)
  const sortBy = useSelector(state => state.sort.sortBy)
  const dispatch = useDispatch()
  
  const changeSort = type => {
    setIsOpen(!isOpen)
    type==='популярности' && dispatch({type: SORT_POP, payload: type})
    type==='цене' && dispatch({type: SORT_PRICE, payload: type})
    type==='названию' && dispatch({type: SORT_TITLE, payload: type})
  }

  return (
    <div className="content-header">
      <div className="content-title">
        <b>{title}</b>
      </div>
      <div className={isOpen ? "content-sort active" : "content-sort"}>
        <img src="/images/triangle.png" alt="" />
        <b>Сортировка по:</b>
        <span onClick={()=>setIsOpen(!isOpen)}>{sortBy}</span>
        <div className="sort-popup">
          <ul>
            <li className={sortBy==='популярности' ? "active" : ""} onClick={()=>changeSort('популярности')}>популярности</li>
            <li className={sortBy==='цене' ? "active" : ""} onClick={()=>changeSort('цене')}>цене</li>
            <li className={sortBy==='названию' ? "active" : ""} onClick={()=>changeSort('названию')}>названию</li>
          </ul>
        </div>
        <div className='sort-overlay' onClick={()=>setIsOpen(!isOpen)}></div>
      </div>
    </div>
  );
}
  
  export default ContentHeader;