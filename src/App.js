import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PAGE_PATHS } from './constants';
import MainLayout from './layouts/MainLayout';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: PAGE_PATHS.HOME,
    element: <Home />,
  },
  {
    path: PAGE_PATHS.CHECKOUT,
    element: <Checkout />,
  },
]);

function App() {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  );
}

export default App;
