import CategoryCard from "../../../components/cards/CategoryCard";
import CategoryCardSkeleton from "../../../components/skeletonLoader/CategoryCardSkeleton";
import { useCategoryData } from "../../../hooks/useCategoryData";

const Categories = () => {
  const { data: categories, isLoading } = useCategoryData();
  return (
    <div className="custom-width mx-auto mt-20">
      <h1 className="header-style">Top Categories</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
        {isLoading &&
          [...Array(6).keys()].map((num) => <CategoryCardSkeleton key={num} />)}
        {categories &&
          categories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
