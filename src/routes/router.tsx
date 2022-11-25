import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AllAdmins from "../pages/dashboard/admin/AllAdmins";
import AddCategory from "../pages/dashboard/admin/AddCategory";
import AllBuyers from "../pages/dashboard/admin/AllBuyers";
import AllSellers from "../pages/dashboard/admin/AllSellers";
import ReportedItems from "../pages/dashboard/admin/ReportedItems";
import MyOrders from "../pages/dashboard/MyOrders";
import AddProduct from "../pages/dashboard/seller/AddProduct";
import MyProducts from "../pages/dashboard/seller/MyProducts";
import Home from "../pages/home/Home";
import Products from "../pages/product/Products";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/seller/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/seller/my-products",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/admin/all-buyers",
        element: <AllBuyers />,
      },
      {
        path: "/dashboard/admin/all-sellers",
        element: <AllSellers />,
      },
      {
        path: "/dashboard/admin/all-admins",
        element: <AllAdmins />,
      },
      {
        path: "/dashboard/admin/add-category",
        element: <AddCategory />,
      },
      {
        path: "/dashboard/admin/reported-items",
        element: <ReportedItems />,
      },
    ],
  },
]);

export default router;
