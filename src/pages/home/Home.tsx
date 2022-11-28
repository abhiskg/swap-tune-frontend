import useDocTitle from "../../hooks/useDocTitle";
import AdvertisedProducts from "./sections/AdvertisedProducts";
import Categories from "./sections/Categories";
import Hero from "./sections/Hero";
import Projection from "./sections/Projection";

const Home = () => {
  useDocTitle("Home");
  return (
    <div className="custom-width mx-auto">
      <Hero />
      <AdvertisedProducts />
      <Categories />
      <Projection />
    </div>
  );
};

export default Home;
