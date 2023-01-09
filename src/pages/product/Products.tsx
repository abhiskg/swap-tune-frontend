import { useParams } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import PingLoader from "../../components/loaders/PingLoader";
import ProductCardSkeleton from "../../components/skeletonLoader/ProductCardSkeleton";
import useDocTitle from "../../hooks/useDocTitle";
import { useProductsByCategory } from "../../hooks/useProductsData";

const Products = () => {
  useDocTitle("Products");

  const { id } = useParams();
  const { data: products, isLoading } = useProductsByCategory(id as string);

  return (
    <div className="custom-width mx-auto my-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {isLoading &&
          [...Array(3).keys()].map((num) => <ProductCardSkeleton key={num} />)}
        {products && products.length < 1 && (
          <div className="text-lg font-medium">No product Available</div>
        )}
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        <div className="fixed w-1/3"></div>
      </div>
    </div>
  );
};

export default Products;
