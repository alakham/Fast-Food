import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteItem } from './cartSlice';
import { getTotalCartQuantity, getTotalPrice } from './cartSlice';
import { formatCurrency } from '../utilities/helpers';

function CartOverview() {
  const totalQuanity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalPrice);

  const dispatch = useDispatch();

  function handleDelete() {
    // dispatch(deleteItem(pizzaId));
  }

  if (!totalQuanity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm font-semibold uppercase text-stone-200 sm:px-6 sm:text-base">
      <p className="space-x-4 text-stone-200 sm:space-x-6">
        <span>{totalQuanity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
