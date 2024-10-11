import Button from '../utilities/Components/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartQuantity } from './cartSlice';

import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  function handleClear() {
    dispatch(clearCart());
  }

  const quantity = useSelector(getTotalCartQuantity);

  return (
    <div className="px-4 py-3">
      {/* <LinkButton to="/menu">&larr; Back to menu</LinkButton> */}

      <h2 className="mt-7 text-xl font-semibold">
        {!cart.length && <EmptyCart />}
      </h2>

      <ul className="mb-6 mt-4 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.name} />
        ))}
      </ul>

      {quantity > 0 && (
        <div className="space-x-6">
          <Button to="/order/new" type="primary">
            Order pizzas
          </Button>

          <Button type="secondary" onClick={handleClear}>
            Clear cart
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
