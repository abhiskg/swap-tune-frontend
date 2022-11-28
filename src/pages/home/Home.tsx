import useDocTitle from "../../hooks/useDocTitle";
import AdvertisedProducts from "./sections/AdvertisedProducts";
import Categories from "./sections/Categories";

const Home = () => {
  useDocTitle("Home");
  return (
    <div className="custom-width mx-auto">
      <AdvertisedProducts />
      <Categories />
    </div>
  );
};

export default Home;
