import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PingLoader from "../components/loaders/PingLoader";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const authContext = useContext(AuthContext);
  const location = useLocation();

  if (authContext?.loading) {
    return (
      <div>
        <PingLoader />
      </div>
    );
  }

  if (authContext?.user?.uid) {
    return <>{children}</>;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
