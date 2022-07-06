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
  const changeType = type => {
    if(type===ALL){
      dicpatch(allTypeAction({allBtb: true, meatBtn: false, chickenBtn: false, sausageBtn: false, spicyBtn: false}))
      setInputValue('')
     }
    if(type===MEAT){
      dicpatch(meatTypeAction({allBtb: false, meatBtn: true, chickenBtn: false, sausageBtn: false, spicyBtn: false}));
      setInputValue('')
      }
    if(type===CHICKEN){
      dicpatch(chickenTypeAction({allBtb: false, meatBtn: false, chickenBtn: true, sausageBtn: false, spicyBtn: false})) 
      setInputValue('')
      }
    if(type===SAUSAGE){
      dicpatch(sausageTypeAction({allBtb: false, meatBtn: false, chickenBtn: false, sausageBtn: true, spicyBtn: false}))
      setInputValue('')
      }
    if(type===SPICY){
      dicpatch(spiceTypeAction({allBtb: false, meatBtn: false, chickenBtn: false, sausageBtn: false, spicyBtn: true}))
      setInputValue('')
      }
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