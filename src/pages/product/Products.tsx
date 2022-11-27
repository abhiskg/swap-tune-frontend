import { useParams } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import PingLoader from "../../components/loaders/PingLoader";
import { useProductsByCategory } from "../../hooks/useProductsData";

const Products = () => {
  const { id } = useParams();
  const { data: products, isLoading } = useProductsByCategory(id as string);
  if (isLoading) {
    return <PingLoader />;
  }

  return (
    <div className="custom-width mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
