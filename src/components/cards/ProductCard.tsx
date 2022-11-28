import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useToggleProductReportedOption } from "../../hooks/useProductsData";
import BookingModal from "../../modals/BookingModal";
import { ProductDataTypes } from "../../types/ProductTypes";

const ProductCard = ({ product }: { product: ProductDataTypes }) => {
  const authContext = useContext(AuthContext);
  const { mutate } = useToggleProductReportedOption();

  const handleReportItem = (id: string) => {
    const data = { id, report: "report" };
    mutate(data);
  };
  return (
    <div className="h-full overflow-hidden rounded-lg border-1 shadow border-gray-200 border-opacity-60">
      <div className="relative md:h-36 lg:h-48">
        <img
          className="w-full object-cover object-center h-full "
          src={product.image}
          alt="blog"
        />
        <span className="absolute top-0 text-sm font-medium right-0 bg-blue-500 rounded p-0.5">
          {product.category}
        </span>
      </div>

      <div className="px-6 pt-1 pb-6">
        <p className="text-xs font-medium text-gray-600">
          Posted on {product.createdAt.slice(0, 10)}
        </p>
        <div className="flex items-center justify-between">
          <h3 className=" font-medium text-gray-900 text-lg">
            {product.productName}
          </h3>
          <div
            onClick={() => handleReportItem(product._id)}
            className=" text-sm text-gray-50 bg-red-400 p-1 hover:bg-red-500 cursor-pointer rounded"
          >
            Report item
          </div>
        </div>
        <div className="flex items-center gap-1  font-medium text-gray-600">
          Price:
          <p className=" text-gray-600">
            <span className="text-green-500">{product.resalePrice}</span>$
          </p>
          <p className=" ml-1">
            <span className=" line-through text-red-400">
              {product.originalPrice}
            </span>
            $
          </p>
        </div>
        <p className=" text-sm text-green-500 font-medium">
          Condition: {product.condition}
        </p>
        <p className=" text-sm font-medium text-gray-600">
          Used for {product.yearOfUse}{" "}
          {product.yearOfUse < 2 ? "year" : "years"}
        </p>

        <div className=" flex items-center  gap-1">
          <p className=" text-sm font-medium text-gray-600">
            Seller: {product.sellerName}
          </p>

          {product.isSellerVerified && (
            <div className="bg-green-500 p-[1.5px] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          )}
        </div>
        <div className="text-sm font-medium text-gray-600">
          Location {product.location}
        </div>
        {authContext?.user?.uid ? (
          <BookingModal product={product} />
        ) : (
          <button
            onClick={() => toast.error("Login first")}
            className="bg-blue-300  w-full text-center py-1 rounded shadow mt-3"
          >
            Book Now
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
