import ProductCard from "../../../components/cards/ProductCard";
import PingLoader from "../../../components/loaders/PingLoader";
import ProductCardSkeleton from "../../../components/skeletonLoader/ProductCardSkeleton";
import { useAdvertiseProducts } from "../../../hooks/useProductsData";

const AdvertisedProducts = () => {
  const { data: products, isLoading } = useAdvertiseProducts();
  if (isLoading) {
    <PingLoader />;
  }

  return (
    <>
      <div className="custom-width mx-auto mb-10">
        <h1 className="header-style">Advertised Product</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {isLoading &&
            [...Array(3).keys()].map((num) => (
              <ProductCardSkeleton key={num} />
            ))}
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default AdvertisedProducts;
