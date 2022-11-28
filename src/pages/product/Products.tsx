import { useParams } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import PingLoader from "../../components/loaders/PingLoader";
import useDocTitle from "../../hooks/useDocTitle";
import { useProductsByCategory } from "../../hooks/useProductsData";

const Products = () => {
  useDocTitle("Products");

  const { id } = useParams();
  const { data: products, isLoading } = useProductsByCategory(id as string);
  if (isLoading) {
    return <PingLoader />;
  }

  return (
    <div className="custom-width mx-auto my-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
