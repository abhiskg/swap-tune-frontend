import { useContext } from "react";
import PingLoader from "../../../components/loaders/PingLoader";
import { AuthContext } from "../../../context/AuthContext";
import useDocTitle from "../../../hooks/useDocTitle";
import {
  useDeleteUser,
  useMakeAdminUser,
  useUsersData,
} from "../../../hooks/useUsersData";
import DeleteModal from "../../../modals/DeleteModal";

const AllSellers = () => {
  useDocTitle("All-sellers");

  const { data: sellers, isLoading } = useUsersData("seller");
  const { mutate } = useMakeAdminUser("seller");
  const { mutate: mutateDelete } = useDeleteUser("seller");
  const authContext = useContext(AuthContext);

  const handleAdmin = (id: string) => {
    mutate(id);
  };

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
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className=" bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Seller Name</th>
              <th className="p-3">Email</th>
              <th className="p-3 ">Change Role</th>
              <th className="p-3 text-right">Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellers &&
              sellers.map((seller) => (
                <tr
                  key={seller._id}
                  className="border-b border-gray-300 border-opacity-20 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{seller.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{seller.email}</p>
                  </td>
                  <td className="p-3 ">
                    {seller.role !== "admin" &&
                    seller.email !== "seller@gmail.com" ? (
                      <span
                        className="bg-green-500 text-white p-1 rounded cursor-pointer"
                        onClick={() => handleAdmin(seller._id)}
                      >
                        Make Admin
                      </span>
                    ) : (
                      <span className="bg-red-500 text-white py-1 px-2 rounded cursor-pointer">
                        Restricted
                      </span>
                    )}
                  </td>
                  {seller.email !== "seller@gmail.com" ? (
                    <td className="p-3 text-right">
                      <DeleteModal
                        id={seller._id}
                        mutateDelete={mutateDelete}
                      />
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

export default AllSellers;
