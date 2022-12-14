import PingLoader from "../../../components/loaders/PingLoader";
import useDocTitle from "../../../hooks/useDocTitle";
import {
  useDeleteUser,
  useMakeAdminUser,
  useUsersData,
} from "../../../hooks/useUsersData";
import DeleteModal from "../../../modals/DeleteModal";

const AllBuyers = () => {
  useDocTitle("All-buyers");

  const { data: buyers, isLoading, isError, error } = useUsersData("buyer");
  const { mutate } = useMakeAdminUser("buyer");
  const { mutate: mutateDelete } = useDeleteUser("buyer");

  const handleAdmin = (id: string) => {
    mutate(id);
  };

  if (isLoading) {
    return <PingLoader />;
  }

  if (isError) {
    console.log(error);
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
              <th className="p-3">Buyer Name</th>
              <th className="p-3">Email</th>
              <th className="p-3 ">Change Role</th>
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
                  <td className="p-3 ">
                    {buyer.role !== "admin" && (
                      <span
                        className="bg-green-500 text-white p-1 rounded cursor-pointer"
                        onClick={() => handleAdmin(buyer._id)}
                      >
                        Make Admin
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-right">
                    <DeleteModal id={buyer._id} mutateDelete={mutateDelete} />
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
