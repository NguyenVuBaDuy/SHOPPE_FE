import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NormalUserLayout from "./components/layout/normalUser/normalUserLayout";
import HomePage from "./pages/normalUser/home/homePage";
import ProductByCategory from "./pages/normalUser/product/productByCategory";
import Product from "./pages/normalUser/product/product";
import ProductDetailPage from "./pages/normalUser/product/productDetailPage";
import OrderHistoryPage from "./pages/normalUser/orderHistory/orderHistoryPage";
import CheckoutPage from "./pages/normalUser/checkout/checkoutPage";
import ProfilePage from "./pages/normalUser/profile/profilePage";
import LoginPage from "./pages/normalUser/login/loginPage";
import RegisterPage from "./pages/normalUser/register/registerPage";


import Cart from "./pages/normalUser/cart/cartPage";


const router = createBrowserRouter([
  {
    path: `/`,
    element: <NormalUserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: `/products`,
        element: <Product />,
      },
      {
        path: `/products/:category`,
        element: <ProductByCategory />,
      },
      {
        path: `/products/:category/:id`,
        element: <ProductDetailPage />,
      },
      {
        path: `/checkout`,
        element: <CheckoutPage />,
      },
      {
        path: `/user/purchase`,
        element: <OrderHistoryPage />,
      },
      {
        path: `/user/profile`,
        element: <ProfilePage />,
      },
      {
        path: `/user/cart`,

        element: <Cart />
      },
    ]

  },
  {
    path: `/login`,
    element: <LoginPage />,
  },
  {
    path: `/register`,
    element: <RegisterPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
