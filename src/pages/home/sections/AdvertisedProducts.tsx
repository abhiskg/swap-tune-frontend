import { useAdvertiseProducts } from "../../../hooks/useProductsData";

const AdvertisedProducts = () => {
  const {data} = useAdvertiseProducts();
  console.log(data)
  return <div></div>;
};

export default AdvertisedProducts;
