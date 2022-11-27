import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PingLoader from "../components/loaders/PingLoader";
import { AuthContext } from "../context/AuthContext";
import useCheckUserRole from "../hooks/useCheckUserRole";

const BuyerRoute = ({ children }: { children: React.ReactNode }) => {
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

  if (userRole === "buyer") {
    return <>{children}</>;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;