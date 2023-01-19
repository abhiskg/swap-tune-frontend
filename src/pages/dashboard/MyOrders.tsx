import { useContext } from "react";
import { Link } from "react-router-dom";
import PingLoader from "../../components/loaders/PingLoader";
import { AuthContext } from "../../context/AuthContext";
import useDocTitle from "../../hooks/useDocTitle";
import { useOrdersData } from "../../hooks/useOrdersData";

const MyOrders = () => {
  useDocTitle("My-orders");

  const authContext = useContext(AuthContext);
  const { isLoading, data: orders } = useOrdersData(
    authContext?.user?.email as string
  );

  if (isLoading) {
    return <PingLoader />;
  }
  return (
    <div>
      {orders && orders.length > 0 ? (
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className=" bg-gray-300">
            <tr>
              <th className="p-3 text-left">Product Image</th>
              <th className="p-3 text-left">Product Name</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-300 border-opacity-20 bg-gray-50"
                >
                  <td className="p-3">
                    <img
                      className=" w-10 h-10 rounded"
                      src={order.productImage}
                      alt={order.productName}
                    />
                  </td>
                  <td className="p-3">
                    <p>{order.productName}</p>
                  </td>
                  <td className="p-3">
                    <p>{order.productPrice}</p>
                  </td>
                  <td className="p-3">
                    <p>{order.orderStatus}</p>
                  </td>

                  <td className="p-3 text-right">
                    {order.orderStatus === "unpaid" && (
                      <Link
                        to={`/dashboard/payment/${order._id}`}
                        className="bg-green-500 p-1 rounded text-white font-medium"
                      >
                        Pay
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center items-center h-screen -mt-16  text-center text-3xl font-semibold  sm:text-4xl">
          No Order Available
        </div>
      )}
    </div>
  );
};

export default MyOrders;
