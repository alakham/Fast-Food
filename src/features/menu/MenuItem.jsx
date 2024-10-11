import { formatCurrency } from '../utilities/helpers';
import Button from '../utilities/Components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItemButton from '../cart/deleteItemButton';
import UpdateQuantity from '../cart/UpdateQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  function handleAddItem() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  return (
    <li className="flex gap-5 py-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity_70 grayscale' : ''}`}
      />
      <div className="flex flex-grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-600">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-600">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateQuantity pizzaId={id} currentQuantity={currentQuantity} />

              <DeleteItemButton pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddItem}>
              Add to card
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
