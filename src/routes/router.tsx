import { createBrowserRouter } from "react-router-dom";
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
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/blog/Blog";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Payment from "../pages/dashboard/payment/Payment";
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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/my-orders",
        element: (
          <BuyerRoute>
            <MyOrders />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <BuyerRoute>
            <Payment />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/seller/add-product",
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/seller/my-products",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/admin/all-buyers",
        element: (
          <AdminRoute>
            <AllBuyers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/all-sellers",
        element: (
          <AdminRoute>
            <AllSellers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/all-admins",
        element: (
          <AdminRoute>
            <AllAdmins />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/add-category",
        element: (
          <AdminRoute>
            <AddCategory />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/reported-items",
        element: (
          <AdminRoute>
            <ReportedItems />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
