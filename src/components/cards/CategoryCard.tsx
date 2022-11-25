import { Link } from "react-router-dom";
import { CategoryDataType } from "../../types/CategoryTypes";

const CategoryCard = ({ category }: { category: CategoryDataType }) => {
  return (
    <Link
      to={`/category/${category._id}`}
      className="relative rounded overflow-hidden shadow"
    >
      <div className="contrast-75 h-40 ">
        <img
          className="h-full w-full"
          src={category.image}
          alt={category.categoryName}
        />
      </div>
      <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white font-bold text-2xl">
        {category.categoryName}
      </p>
    </Link>
  );
};

export default CategoryCard;
