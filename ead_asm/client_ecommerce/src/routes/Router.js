import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../shared/layouts/FullLayout"));

/***** Pages ****/
const Home = lazy(() => import("../modules/home/Home"));
const Shop = lazy(() => import("../modules/shop/Shop"));
const Register = lazy(() => import("../modules/auth/components/Register"));
const Login = lazy(() => import("../modules/auth/components/Login"));
const ProductDetails = lazy(() => import("../modules/shop/components/ProductDetails"));

/*****Routes******/

export const ROUTES = {
  HOME_PAGE: "/",
  SHOP_PAGE: "/shop",
  REGISTER_PAGE: "/register",
  LOGIN_PAGE: "/login",
  PRODUCT_DETAILS_PAGE: "/products",
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
      { path: `${ROUTES.PRODUCT_DETAILS_PAGE}/:id`, element: <ProductDetails /> },
    ],
  },
];

export default ThemeRoutes;
