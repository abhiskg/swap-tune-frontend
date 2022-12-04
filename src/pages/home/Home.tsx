import useDocTitle from "../../hooks/useDocTitle";
import AdvertisedProducts from "./sections/AdvertisedProducts";
import Categories from "./sections/Categories";
import Hero from "./sections/Hero";
import Projection from "./sections/Projection";

const Home = () => {
  useDocTitle("Home");
  return (
    <div>
      <Hero />
      <Categories />
      <AdvertisedProducts />
      <Projection />
    </div>
  );
};

export default Home;
