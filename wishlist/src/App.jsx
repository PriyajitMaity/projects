import './App.css'
import { useState } from 'react';
import Wishlist from './components/Wishlist';
import AddItemForm from './components/AddItemForm';

function App() {

  const [wishlist, setWishlist] = useState([]);
  const [nextItemId, setNextItemId] = useState(1);

  const addItem = (name) => {
    const newItem = { id: nextItemId, name };
    setWishlist([...wishlist, newItem]);
    setNextItemId(nextItemId + 1);
  };

  const removeItem = (itemId) => {
    setWishlist(wishlist.filter((item) => item.id !== itemId));
  };
  return (
    <div>
      <h1>My Wishlist</h1>
      <Wishlist wishlist={wishlist} onRemove={removeItem} />
      <AddItemForm onAdd={addItem} />
    </div>
  )
}

export default App
