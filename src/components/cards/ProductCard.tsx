import { Link } from "react-router-dom";
import { ProductDataTypes } from "../../types/ProductTypes";

const ProductCard = ({ product }: { product: ProductDataTypes }) => {
  return (
    <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
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
        <p className="text-sm">Posted at {product.createdAt.slice(0, 10)}</p>
        <div className="flex items-center justify-between">
          <h3 className="title-font mb-1 text-lg font-medium text-gray-900">
            {product.productName}
          </h3>
          <div>{product.category}</div>
        </div>
        <p className="text-center">Condition: {product.condition}</p>

        <p className=" font-medium">Original Price: {product.originalPrice}$</p>
        <p className=" font-medium">Resale Price: {product.resalePrice}$</p>
        <p>Used:{product.yearOfUse} year</p>
        <div className="flex items-center gap-1">
          <p className="">Seller:{product.sellerName}</p>
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

        <Link
          to={`../products/${product._id}`}
          className="bg-blue-300 block text-center py-1 rounded shadow"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
