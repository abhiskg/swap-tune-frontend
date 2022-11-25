import { useMakeAdminUser, useUsersData } from "../../../hooks/useUsersData";
import DeleteModal from "../../../modals/DeleteModal";

const AllBuyers = () => {
  const { data: buyers, isLoading } = useUsersData("ab@gmail.com", "buyer");
  const { mutate } = useMakeAdminUser("ab@gmail.com", "buyer");

  const handleAdmin = (id: string) => {
    mutate(id);
  };

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
            {buyers &&
              buyers.map((buyer) => (
                <tr
                  key={buyer._id}
                  className="border-b border-gray-300 border-opacity-20 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{buyer.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{buyer.email}</p>
                  </td>
                  <td className="p-3 text-center">
                    {buyer.role !== "admin" && (
                      <p onClick={() => handleAdmin(buyer._id)}>Make Admin</p>
                    )}
                  </td>
                  <td className="p-3 text-right">
                    <DeleteModal id={buyer._id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
