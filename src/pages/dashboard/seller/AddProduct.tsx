import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCategoryData } from "../../../hooks/useCategoryData";

const ProductSchema = z.object({
  productName: z.string().min(1, { message: "Please enter product name" }),
  image: z
    .string()
    .min(1, { message: "Please enter product image" })
    .url({ message: "Enter a valid url" }),
  originalPrice: z
    .number({
      required_error: "Original price is required",
      invalid_type_error: "Original price must be a number",
    })
    .positive(),
  resalePrice: z.number().min(1).positive(),
  condition: z.string().min(1, { message: "Please select product condition" }),
  yearOfUse: z.number().min(1).positive(),
  location: z.string().min(1, { message: "Please enter your location" }),
  description: z
    .string()
    .min(1, { message: "Please enter product description" }),
  categoryId: z.string().min(1, { message: "Please select product category" }),
});

type ProductSchemaType = z.infer<typeof ProductSchema>;

const AddProduct = () => {
  const { data: categories, isLoading } = useCategoryData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductSchemaType>({
    resolver: zodResolver(ProductSchema),
  });

  const handleAddProduct: SubmitHandler<ProductSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid place-items-center">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-1">
        <div className="space-y-1">
          <label htmlFor="productName">Product Name</label>
          <input
            className="input-form"
            type="text"
            id="productName"
            {...register("productName")}
            placeholder=""
          />
          {errors.productName?.message && (
            <p className="error-message">{errors.productName?.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="image">Product Image</label>
          <input
            className="input-form"
            type="text"
            id="image"
            {...register("image")}
            placeholder=""
          />
          {errors.image?.message && (
            <p className="error-message">{errors.image?.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="categoryId">Product Category</label>
          <select className="input-form" {...register("categoryId")}>
            {categories &&
              categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.categoryName}
                </option>
              ))}
          </select>
          {errors.categoryId?.message && (
            <p className="error-message">{errors.categoryId?.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="originalPrice">Original Price</label>
          <input
            className="input-form"
            type="number"
            id="originalPrice"
            {...register("originalPrice", { valueAsNumber: true })}
            placeholder=""
          />
          {errors.originalPrice?.message && (
            <p className="error-message">{errors.originalPrice?.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="resalePrice">Resale Price</label>
          <input
            className="input-form"
            type="number"
            id="resalePrice"
            {...register("resalePrice", { valueAsNumber: true })}
            placeholder=""
          />
          {errors.resalePrice?.message && (
            <p className="error-message">{errors.resalePrice?.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="condition">Product Condition</label>
          <select className="input-form" {...register("condition")}>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
          </select>
          {errors.condition?.message && (
            <p className="error-message">{errors.condition?.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="yearOfUse">Year of used</label>
          <input
            className="input-form"
            type="text"
            {...register("yearOfUse", { valueAsNumber: true })}
            id="yearOfUse"
            placeholder=""
          />
          {errors.yearOfUse?.message && (
            <p className="error-message">{errors.yearOfUse?.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="location">Location</label>
          <input
            className="input-form"
            type="text"
            id="location"
            {...register("location")}
            placeholder=""
          />
          {errors.location?.message && (
            <p className="error-message">{errors.location?.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="description">Product Description</label>
          <input
            className="input-form"
            type="text"
            id="description"
            placeholder=""
          />
          {errors.description?.message && (
            <p className="error-message">{errors.description?.message}</p>
          )}
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
