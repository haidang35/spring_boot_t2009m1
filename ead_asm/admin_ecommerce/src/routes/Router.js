import { lazy } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../modules/auth/components/LoginForm.js";
import authService from "../modules/auth/services/AuthService.js";
import CategoryList from "../modules/category/components/CategoryList.js";
import CreateCategory from "../modules/category/components/CreateCategory.js";
import OrderDetails from "../modules/order/components/OrderDetails.js";
import OrderList from "../modules/order/components/OrderList.js";
import CreateProduct from "../modules/product/components/CreateProduct.js";
import ProductList from "../modules/product/components/ProductList.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const prefix = "admin";

export const routes = {
  category: {
    index: {
      path: `/${prefix}/categories`,
    },
    create: {
      path: `/${prefix}/categories/create`,
    },
  },
  product: {
    index: {
      path: `/${prefix}/products`,
    },
    create: {
      path: `/${prefix}/products/create`,
    },
  },
  order: {
    index: {
      path: `/${prefix}/orders`,
    },
    details: {
      path: `/${prefix}/orders/:id`,
    },
  },
  auth: {
    login: {
      path: `/${prefix}/login`,
    },
  },
};

const ThemeRoutes = [
  {
    path: "/",
    element: authService.isLogged() ? (
      <FullLayout />
    ) : (
      <Navigate to={routes.auth.login.path} />
    ),
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/streets", exact: true, element: <StreetList /> },
      { path: "/streets/create", exact: true, element: <CreateStreet /> },
      {
        path: routes.category.index.path,
        exact: true,
        element: <CategoryList />,
      },
      {
        path: routes.category.create.path,
        exact: false,
        element: <CreateCategory />,
      },
      {
        path: routes.product.index.path,
        exact: true,
        element: <ProductList />,
      },
      {
        path: routes.product.create.path,
        exact: true,
        element: <CreateProduct />,
      },
      {
        path: routes.order.index.path,
        exact: true,
        element: <OrderList />,
      },
      {
        path: routes.order.details.path,
        exact: true,
        element: <OrderDetails />,
      },
    ],
  },
  {
    path: routes.auth.login.path,
    element: <LoginForm />,
  },
];

export default ThemeRoutes;
