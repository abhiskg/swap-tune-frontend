import { Navigate, useLocation } from "react-router-dom";
import PingLoader from "../../components/loaders/PingLoader";
import useCheckUserRole from "../../hooks/useCheckUserRole";

const Dashboard = () => {
  const location = useLocation();
  const { loading, userRole } = useCheckUserRole();

  if (loading) {
    return (
      <div>
        <PingLoader />
      </div>
    );
  }

  if (userRole === "buyer") {
    return <Navigate to="/dashboard/my-orders" replace></Navigate>;
  }
  if (userRole === "seller") {
    return <Navigate to="/dashboard/seller/my-products" replace></Navigate>;
  }
  if (userRole === "admin") {
    return <Navigate to="/dashboard/admin/all-sellers" replace></Navigate>;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Dashboard;
