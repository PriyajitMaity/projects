/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function WishlistItem({ item, onRemove }) {
  return (
    <li>
      {item.name}
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </li>
  );
}

export default WishlistItem;
    