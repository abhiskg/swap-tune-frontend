import CategoryCard from "../../../components/cards/CategoryCard";
import { useCategoryData } from "../../../hooks/useCategoryData";

const Categories = () => {
  const { data: categories, isLoading } = useCategoryData();
  return (
    <div className="grid grid-cols-3 gap-5">
      {categories &&
        categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
    </div>
  );
};

export default Categories;
