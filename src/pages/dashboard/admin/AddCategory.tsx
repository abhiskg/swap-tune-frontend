import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddCategory } from "../../../hooks/useCategoryData";

const CategorySchema = z.object({
  categoryName: z.string().min(1, { message: "Please enter category name" }),
  image: z
    .string()
    .min(1, { message: "Please enter category image" })
    .url({ message: "Enter a valid url" }),
});

type CategorySchemaType = z.infer<typeof CategorySchema>;

const AddCategory = () => {
  const { mutate, isLoading } = useAddCategory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategorySchemaType>({
    resolver: zodResolver(CategorySchema),
  });

  const handleAddCategory: SubmitHandler<CategorySchemaType> = (data) => {
    mutate(data);
    reset();
  };
  return (
    <div className=" grid place-items-center ">
      <h2>Add new Category</h2>
      <form onSubmit={handleSubmit(handleAddCategory)}>
        <div className="space-y-1">
          <label htmlFor="categoryName">Category Name</label>
          <input
            className="input-form"
            type="text"
            id="categoryName"
            {...register("categoryName")}
            placeholder=""
          />
          {errors.categoryName?.message && (
            <p className="error-message">{errors.categoryName?.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="image">Category Image</label>
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
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
