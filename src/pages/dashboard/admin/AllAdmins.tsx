import { useContext } from "react";
import PingLoader from "../../../components/loaders/PingLoader";
import { AuthContext } from "../../../context/AuthContext";
import useDocTitle from "../../../hooks/useDocTitle";
import { useDeleteUser, useUsersData } from "../../../hooks/useUsersData";
import DeleteModal from "../../../modals/DeleteModal";

const AllAdmins = () => {
  useDocTitle("All-admins");
  const authContext = useContext(AuthContext);
  const { data: admins, isLoading } = useUsersData("admin");
  const { mutate: mutateDelete } = useDeleteUser("admin");

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
                  {admin.email !== "admin@gmail.com" ? (
                    <td className="p-3 text-right">
                      <DeleteModal id={admin._id} mutateDelete={mutateDelete} />
                    </td>
                  ) : (
                    <td className="p-3 text-right">
                      <button
                        className="mr-1 mb-1 rounded-full bg-red-500 p-2 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-slash"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line
                            x1="4.93"
                            y1="4.93"
                            x2="19.07"
                            y2="19.07"
                          ></line>
                        </svg>
                      </button>
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
