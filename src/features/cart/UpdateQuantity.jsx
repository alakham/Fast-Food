import { useDispatch } from 'react-redux';
import Button from '../utilities/Components/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecrease() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-3 md:gap-3">
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
      <span className="text-sm font-medium text-stone-600">
        {currentQuantity}
      </span>
      <Button type="round" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
