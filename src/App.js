import {Routes, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {SORT_POP, SORT_PRICE, SORT_TITLE} from './store/types';
import './App.css';
import Pizzapage from './pages/Pizzapage';
import Dessertpage from './pages/Dessertpage';
import Chickenpage from './pages/Chickenpage';
import Drinkpage from './pages/Drinkpage';
import Pastepage from './pages/Pastepage';
import Saladpage from './pages/Saladpage';
import Saucenpage from './pages/Saucenpage';
import Cartpage from './pages/Cartpage';
import Notfoundpage from './pages/Notfoundpage';
import Header from './components/Header';
import Footer from './components/Footer';


export const sortByType = (type, arr) => {
  if(type ===SORT_POP) return [...arr.sort((a, b) => Number(a.id) > Number(b.id)  ? 1 : -1)]
  if(type === SORT_PRICE) return [...arr.sort((a, b) => Number(a.size.small.price) > Number(b.size.small.price)  ? 1 : -1)]
  if(type === SORT_TITLE) return [...arr.sort((a, b) => a.title > b.title  ? 1 : -1)]
}

function App() {
  const pizza = useSelector(state => state.items.pizza)
  const dessert = useSelector(state => state.items.dessert)
  const chicken = useSelector(state => state.items.chicken)
  const drink = useSelector(state => state.items.drink)
  const paste = useSelector(state => state.items.paste)
  const salad = useSelector(state => state.items.salad)
  const sauce = useSelector(state => state.items.sauce)
  const cart = useSelector(state => state.cart)

  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Routes>
            <Route index element={<Pizzapage items={pizza.itemsByType} itemsForSearch={pizza.itemsByInput} typeBtn={pizza.typeBtn} />}></Route>
            <Route path="dessert" element={<Dessertpage items={dessert} />}></Route>
            <Route path= "chicken" element={<Chickenpage items={chicken} />}></Route>
            <Route path= "drink" element={<Drinkpage items={drink} />}></Route>
            <Route path= "paste" element={<Pastepage items={paste} />}></Route>
            <Route path= "salad" element={<Saladpage items={salad} />}></Route>
            <Route path= "sauce" element={<Saucenpage items={sauce} />}></Route>
            <Route path= "cart" element={<Cartpage items={cart} />}></Route>
            <Route path="*" element={<Notfoundpage />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;