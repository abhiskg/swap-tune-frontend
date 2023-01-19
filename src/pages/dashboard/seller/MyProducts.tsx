import { useContext } from "react";
import PingLoader from "../../../components/loaders/PingLoader";
import { AuthContext } from "../../../context/AuthContext";
import useDocTitle from "../../../hooks/useDocTitle";
import {
  useDeleteProduct,
  useMyProductsData,
  useToggleAdvertiseMode,
} from "../../../hooks/useProductsData";
import DeleteModal from "../../../modals/DeleteModal";

const MyProducts = () => {
  useDocTitle("My-products");

  const authContext = useContext(AuthContext);
  const { isLoading, data: products } = useMyProductsData(
    authContext?.user?.email as string
  );
  const { mutate } = useToggleAdvertiseMode();
  const { mutate: mutateDelete } = useDeleteProduct();

  const handleUpdateAdvertiseMode = (id: string) => {
    mutate(id);
  };
  if (isLoading) {
    return <PingLoader />;
  }
  return (
    <div>
      {products && products.length > 0 ? (
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col className="lg:table-column hidden" />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className=" bg-gray-300">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-center lg:table-cell hidden">Category</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Advertise Mode</th>
              <th className="p-3 text-right">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-gray-300 border-opacity-20 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{product.productName}</p>
                  </td>
                  <td className="p-3 text-center lg:table-cell hidden">
                    <p>{product.category}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p
                      className={`font-semibold uppercase ${
                        product.status === "available"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {product.status}
                    </p>
                  </td>
                  {product.status === "available" ? (
                    <td className="p-3 text-center">
                      <span
                        onClick={() => handleUpdateAdvertiseMode(product._id)}
                        className="cursor-pointer"
                      >
                        {product.isAdvertised ? (
                          <span className="bg-green-500 rounded-lg p-1 text-white font-medium">
                            ON
                          </span>
                        ) : (
                          <span className="bg-red-500 rounded-lg p-1 text-white font-medium">
                            OFF
                          </span>
                        )}
                      </span>
                    </td>
                  ) : (
                    <td className="p-3 text-center">
                      <p>None</p>
                    </td>
                  )}

                  <td className="py-3 px-2 text-right">
                    <DeleteModal id={product._id} mutateDelete={mutateDelete} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center items-center h-screen -mt-16  text-center text-2xl font-semibold  sm:text-4xl">
          No Product Available, Add One
        </div>
      )}
    </div>
  );
};

export default MyProducts;
