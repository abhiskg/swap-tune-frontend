import { useEffect, useState } from "react";
import { request } from "../utils/axios.utils";

const useCheckUserRole = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    request({ url: `/api/user/role` }).then((role) => {
      setUserRole(role);
      console.log(role);
      setLoading(false);
    });
  }, []);
  return { userRole, loading };
};

export default useCheckUserRole;
