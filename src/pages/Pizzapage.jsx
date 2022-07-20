import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import ContentHeader from '../components/ContentHeader';
import ContentItems from '../components/ContentItems';
import {ALL, MEAT, CHICKEN, SAUSAGE, SPICY, GET_INPUT, CLEAR_INPUT} from '../store/types';
import {allTypeAction, meatTypeAction, chickenTypeAction, sausageTypeAction, spiceTypeAction} from '../store/itemsReducer';



function Pizzapage({items, itemsForSearch, typeBtn}) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    dicpatch({type: CLEAR_INPUT, payload: items})
  }, []);

  const dicpatch = useDispatch()
  const defaultType = {allBtb: false, meatBtn: false, chickenBtn: false, sausageBtn: false, spicyBtn: false}
  const changeType = type => {
    type===ALL && dicpatch(allTypeAction({...defaultType, allBtb: true}))
    type===MEAT && dicpatch(meatTypeAction({...defaultType, meatBtn: true}))
    type===CHICKEN && dicpatch(chickenTypeAction({...defaultType, chickenBtn: true})) 
    type===SAUSAGE && dicpatch(sausageTypeAction({...defaultType, sausageBtn: true}))
    type===SPICY && dicpatch(spiceTypeAction({...defaultType, spicyBtn: true}))
    setInputValue('')
  }

  // input
  const getInput = value => {
    dicpatch({type: GET_INPUT, payload: items.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))})
    setInputValue(value)
  }
  const clearInput = () => {
    setInputValue('')
    dicpatch({type: CLEAR_INPUT, payload: items})
  }

  return (
    <>
      <div className="pizza-categories">
        <ul>
          <li className={typeBtn.allBtb ? "active" : ""} onClick={()=>changeType(ALL)}>Все</li>
          <li className={typeBtn.meatBtn ? "active" : ""} onClick={()=>changeType(MEAT)}>Мясные</li>
          <li className={typeBtn.chickenBtn ? "active" : ""} onClick={()=>changeType(CHICKEN)}>Куриные</li>
          <li className={typeBtn.sausageBtn ? "active" : ""} onClick={()=>changeType(SAUSAGE)}>Колбасные</li>
          <li className={typeBtn.spicyBtn ? "active" : ""} onClick={()=>changeType(SPICY)}>Острые</li>
        </ul>
        <div className="content-search">
          <img src="/images/search.png" alt="search" />
          <input type="text" onChange={event=>getInput(event.target.value)} placeholder="Поиск..." value={inputValue} />
          {
              inputValue !== '' && <img src="/images/remove.png" alt="remove" onClick={clearInput} />
          }
        </div>
      </div>
      <ContentHeader title="Пицца"/>
      <ContentItems items={itemsForSearch} selectorVisible={true}/>
    </>
  );
}

export default Pizzapage;