import { Navigate, useLocation } from "react-router-dom";
import PingLoader from "../components/loaders/PingLoader";
import useCheckUserRole from "../hooks/useCheckUserRole";

const SellerRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { loading, userRole } = useCheckUserRole();

  if (loading) {
    return (
      <div>
        <PingLoader />
      </div>
    );
  }

  if (userRole === "seller") {
    return <>{children}</>;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
