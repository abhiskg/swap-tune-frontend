import AdvertisedProducts from "./sections/AdvertisedProducts";
import Categories from "./sections/Categories";

const Home = () => {
  return (
    <div className="custom-width mx-auto">
      <AdvertisedProducts />
      <Categories />
    </div>
  );
};

export default Home;
