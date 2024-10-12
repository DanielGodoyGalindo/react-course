import React, { useState } from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes = [
  { done: false, text: 'Viajar a la luna' },
  { done: true, text: 'Hacer un curso introductorio de React' },
  { done: true, text: 'Pagar el gimnasio' },
  { done: false, text: 'Ir al gimnasio' },
];

const App = () => {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1>My wishlist</h1>
      <WishInput onNewWish={wish => setWishes([...wishes, wish])} />
      <WishList wishes={wishes} onWishesChange={setWishes} />
      <button
        type="button"
        className="wish-clear"
        onClick={() => setWishes(wishes.filter(wish => !wish.done))}>
        Archivar cumplidos
      </button>
    </div>
  );
};

export default App;