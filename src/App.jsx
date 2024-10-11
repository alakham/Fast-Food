import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './UI/Home';
import Error from './UI/Error';
import Menu from './features/menu/Menu';
import { loader as menuLoader } from './features/menu/Menu';
import Order from './features/order/Order';
import { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import CreateOrder from './features/order/CreateOrder';
import { action as createOrderAction } from './features/order/CreateOrder';

import Cart from './features/cart/Cart';
import AppLayout from './UI/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/order/:orderID',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
