import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../shared/layouts/FullLayout"));

/***** Pages ****/
const Home = lazy(() => import("../modules/home/Home"));
const Shop = lazy(() => import("../modules/shop/Shop"));
const Register = lazy(() => import("../modules/auth/components/Register"));
const Login = lazy(() => import("../modules/auth/components/Login"));
const ProductDetails = lazy(() =>
  import("../modules/shop/components/ProductDetails")
);
const Cart = lazy(() => import("../modules/shop/components/Cart"));
const Checkout = lazy(() => import("../modules/shop/components/Checkout"));
const Account = lazy(() => import("../modules/account/Account"));

/*****Routes******/

export const ROUTES = {
  HOME_PAGE: "/",
  SHOP_PAGE: "/shop",
  REGISTER_PAGE: "/register",
  LOGIN_PAGE: "/login",
  PRODUCT_DETAILS_PAGE: "/products",
  CART_PAGE: "/cart",
  CHECKOUT_PAGE: '/checkout',
  ACCOUNT_PAGE: '/account'
};

const ThemeRoutes = [
  {
    path: "",
    element: <FullLayout />,
    children: [
      { path: ROUTES.HOME_PAGE, element: <Home /> },
      { path: ROUTES.SHOP_PAGE, element: <Shop /> },
      { path: ROUTES.REGISTER_PAGE, element: <Register /> },
      { path: ROUTES.LOGIN_PAGE, element: <Login /> },
      {
        path: `${ROUTES.PRODUCT_DETAILS_PAGE}/:id`,
        element: <ProductDetails />,
      },
      { path: ROUTES.CART_PAGE, element: <Cart /> },
      { path: ROUTES.CHECKOUT_PAGE, element: <Checkout /> },
      { path: ROUTES.ACCOUNT_PAGE, element: <Account /> },
    ],
  },
];

export default ThemeRoutes;
