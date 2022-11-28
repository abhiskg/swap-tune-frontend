import ProductCard from "../../../components/cards/ProductCard";
import PingLoader from "../../../components/loaders/PingLoader";
import { useAdvertiseProducts } from "../../../hooks/useProductsData";

const AdvertisedProducts = () => {
  const { data: products, isLoading } = useAdvertiseProducts();
  if (isLoading) {
    <PingLoader />;
  }

  return (
    <>
      {products && products?.length > 0 && (
        <div className=" mb-10">
          <h1 className="header-style">Advertised Product</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisedProducts;
