import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PingLoader from "../components/loaders/PingLoader";
import { AuthContext } from "../context/AuthContext";
import useCheckUserRole from "../hooks/useCheckUserRole";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const authContext = useContext(AuthContext);
  const location = useLocation();
  const { loading, userRole } = useCheckUserRole();

  if (loading) {
    return (
      <div>
        <PingLoader />
      </div>
    );
  }

  if (userRole === "admin") {
    return <>{children}</>;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
