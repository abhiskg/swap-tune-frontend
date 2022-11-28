import CategoryCard from "../../../components/cards/CategoryCard";
import { useCategoryData } from "../../../hooks/useCategoryData";

const Categories = () => {
  const { data: categories, isLoading } = useCategoryData();
  return (
    <div>
      <h1 className="header-style">All Categories</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
        {categories &&
          categories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
