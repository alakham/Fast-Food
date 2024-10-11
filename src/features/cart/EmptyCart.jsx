import LinkButton from '../utilities/Components/LinkButton';

function EmptyCart() {
  return (
    <div className="space-y-3 px-4 py-3 text-xl font-semibold">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
