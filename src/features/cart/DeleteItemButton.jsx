import Button from '../utilities/Components/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

function DeleteItemButton({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={handleDeleteItem}>
      delete
    </Button>
  );
}

export default DeleteItemButton;
