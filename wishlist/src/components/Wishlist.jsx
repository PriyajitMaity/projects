/* eslint-disable react/prop-types */
import WishlistItem from './WishlistItem';

// eslint-disable-next-line react/prop-types
function Wishlist({ wishlist, onRemove }) {
  return (
    <ul>
      {
        wishlist.map((item) =>(
         <WishlistItem key ={item.id} item ={item} onRemove={onRemove} />
        ))
      }
    </ul>
  );
}

export default Wishlist;
