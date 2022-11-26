import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import {
  useMyProductsData,
  useToggleAdvertiseMode,
} from "../../../hooks/useProductsData";
import DeleteModal from "../../../modals/DeleteModal";

const MyProducts = () => {
  const authContext = useContext(AuthContext);
  const { isLoading, data: products } = useMyProductsData(
    authContext?.user?.email as string
  );
  const { mutate } = useToggleAdvertiseMode();

  const handleUpdateAdvertiseMode = (id: string) => {
    mutate(id);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col className="w-60" />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className=" bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Product</th>
              <th className="p-3">Category</th>
              <th className="p-3">Status</th>
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
                  <td className="p-3">
                    <p>{product.categoryId}</p>
                  </td>
                  <td className="p-3">
                    <p>{product.status}</p>
                  </td>
                  {product.status === "available" && (
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
                  )}

                  <td className="p-3 text-right">
                    {/* <DeleteModal id={product._id} role={product.role} /> */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
