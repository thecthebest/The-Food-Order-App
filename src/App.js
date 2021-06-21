import './App.css';
import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  return (
    <CartContext>
      <Header onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <main>
        <Meals />
      </main>
    </CartContext>
  );
}

export default App;
