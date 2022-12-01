import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { request } from "../utils/axios.utils";

const useCheckUserRole = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    request({ url: `/api/v1/user/role` })
      .then((role) => {
        setUserRole(role);
        console.log(role);
        authContext?.setUserType(role);
        setLoading(false);
      })
      .catch((err) => {
        if (err.message === "Forbidden") {
          authContext?.logOut();
        }
      });
  }, []);
  return { userRole, loading };
};

export default useCheckUserRole;
