import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import Customer from "../Pages/Customer/Customer";
import UpdateCustomer from "../Pages/Customer/UpdateCustomer";
import Dashboard from "../Pages/Dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/customer",
        element: <Customer />,
        loader: () => fetch("http://localhost:3000/api/customer"),
      },
      {
        path: "/customer/update/:id",
        element: <UpdateCustomer />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/customer/${params.id}`),
      },
    ],
  },
]);

export default routes;
