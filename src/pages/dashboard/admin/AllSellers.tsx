import PingLoader from "../../../components/loaders/PingLoader";
import { useMakeAdminUser, useUsersData } from "../../../hooks/useUsersData";
import DeleteModal from "../../../modals/DeleteModal";

const AllSellers = () => {
  const { data: sellers, isLoading } = useUsersData("seller");
  const { mutate } = useMakeAdminUser("seller");

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
            <col className="w-24" />
            <col className="w-24" />
          </colgroup>
          <thead className=" bg-gray-300">
            <tr className="text-left">
              <th className="p-3">User Name</th>
              <th className="p-3">Email</th>
              <th className="p-3 text-right">Edit</th>
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
                  <td className="p-3 text-center">
                    {seller.role !== "admin" && (
                      <p onClick={() => handleAdmin(seller._id)}>Make Admin</p>
                    )}
                  </td>
                  <td className="p-3 text-right">
                    <DeleteModal id={seller._id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
