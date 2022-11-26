import { useContext } from "react";
import PingLoader from "../../../components/loaders/PingLoader";
import { AuthContext } from "../../../context/AuthContext";
import { useUsersData } from "../../../hooks/useUsersData";
import DeleteModal from "../../../modals/DeleteModal";

const AllAdmins = () => {
  const authContext = useContext(AuthContext);
  const { data: admins, isLoading } = useUsersData("admin");

  if (isLoading) {
    return <PingLoader />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col className="w-60" />
            <col />

            <col className="w-24" />
          </colgroup>
          <thead className=" bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Admin Name</th>
              <th className="p-3">Email</th>

              <th className="p-3 text-right">Delete</th>
            </tr>
          </thead>
          <tbody>
            {admins &&
              admins.map((admin) => (
                <tr
                  key={admin._id}
                  className="border-b border-gray-300 border-opacity-20 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{admin.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{admin.email}</p>
                  </td>
                  {authContext?.user?.email !== admin.email && (
                    <td className="p-3 text-right">
                      <DeleteModal id={admin._id} role={admin.role} />
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAdmins;
