import PingLoader from "../../../components/loaders/PingLoader";
import useDocTitle from "../../../hooks/useDocTitle";
import {
  useDeleteProduct,
  useReportedProducts,
  useToggleProductReportedOption,
} from "../../../hooks/useProductsData";
import DeleteModal from "../../../modals/DeleteModal";

const ReportedItems = () => {
  useDocTitle("Reported-items");
  const { data: products, isLoading } = useReportedProducts();
  const { mutate } = useToggleProductReportedOption();
  const { mutate: mutateDelete } = useDeleteProduct();

  const handleReportItem = (id: string) => {
    const data = { id, report: "cancel" };
    mutate(data);
  };

  if (isLoading) {
    return <PingLoader />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col className="lg:table-column hidden" />
            <col />
            <col />
            <col />

            <col className="w-24" />
          </colgroup>
          <thead className=" bg-gray-300">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-center lg:table-cell hidden">Category</th>
              <th className="p-3 text-center">Seller Name</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Report Action</th>
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
                    <p>{product.sellerName}</p>
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
                  <td className="p-3 text-center">
                    <span
                      onClick={() => handleReportItem(product._id)}
                      className="bg-green-500 text-white font-medium rounded px-2 py-px cursor-pointer"
                    >
                      Clear Report
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right">
                    <DeleteModal id={product._id} mutateDelete={mutateDelete} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItems;
