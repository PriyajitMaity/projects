/* eslint-disable react/prop-types */
import { useState } from 'react';

function AddItemForm({ onAdd }) {
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    if (itemName) {
      onAdd(itemName);
      setItemName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add an item"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

export default AddItemForm;
