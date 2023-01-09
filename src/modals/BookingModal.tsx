import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import SpinLoader from "../components/loaders/SpinLoader";
import { AuthContext } from "../context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductDataTypes } from "../types/ProductTypes";
import toast from "react-hot-toast";
import { useCreateNewOrder } from "../hooks/useOrdersData";

const orderInputSchema = z.object({
  // userName: z.string().optional(),
  // userEmail: z.string().optional(),
  phoneNo: z
    .number({
      required_error: "Required",
      invalid_type_error: "Invalid number",
    })
    .positive()
    .gte(10),
  // productName: z.string().optional(),
  // productPrice: z.number().optional(),
  location: z.string().min(1, { message: "Location Required" }),
});

type orderInputTypes = z.infer<typeof orderInputSchema>;

const BookingModal = ({ product }: { product: ProductDataTypes }) => {
  const [showModal, setShowModal] = useState(false);
  const authContext = useContext(AuthContext);
  const { mutate, isLoading, isSuccess } = useCreateNewOrder();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<orderInputTypes>({
    resolver: zodResolver(orderInputSchema),
  });

  // if (isSuccess) {
  //   toast.success("Booking Confirmed!");
  //   toast.success("Now check dashboard & complete payment");
  // }

  const onSubmitHandler: SubmitHandler<orderInputTypes> = (data) => {
    const userName = authContext?.user?.displayName as string;
    const userEmail = authContext?.user?.email;
    const productName = product.productName;
    const productPrice = product.resalePrice;
    const productId = product._id;
    const productImage = product.image;
    const productStatus = product.status;

    if (!userName || !userEmail) {
      return toast.error("Username or UserEmail is missing");
    }

    const order = {
      ...data,
      userName,
      userEmail,
      productImage,
      productId,
      productPrice,
      productName,
      productStatus,
    };
    mutate(order);

    reset();
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-violet-600  w-full text-center py-2 rounded shadow mt-3 text-gray-100 font-medium hover:bg-violet-700"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Book Now
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <div className="text-xl font-semibold">Book Order</div>
                  <button
                    className="  text-2xl font-medium text-red-500  outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>
                {/*body*/}

                <form
                  onSubmit={handleSubmit(onSubmitHandler)}
                  className="relative flex-auto p-4 space-y-2"
                >
                  <div className="space-y-1">
                    <label htmlFor="phoneNo">Phone No</label>
                    <input
                      className="input-form"
                      type="number"
                      id="phoneNo"
                      {...register("phoneNo", { valueAsNumber: true })}
                      placeholder=""
                    />
                    {errors.phoneNo?.message && (
                      <p className="error-message">{errors.phoneNo?.message}</p>
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
                      <p className="error-message">
                        {errors.location?.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="productName">Product Name</label>
                    <input
                      className="input-form"
                      type="text"
                      id="productName"
                      defaultValue={product.productName}
                      disabled
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="productPrice">Product Price</label>
                    <input
                      className="input-form"
                      type="number"
                      id="productPrice"
                      defaultValue={product.resalePrice}
                      disabled
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="userName">User Name</label>
                    <input
                      className="input-form"
                      type="text"
                      id="userName"
                      defaultValue={authContext?.user?.displayName as string}
                      disabled
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="userEmail">User Email</label>
                    <input
                      className="input-form"
                      type="text"
                      id="userEmail"
                      defaultValue={authContext?.user?.email as string}
                      disabled
                    />
                  </div>

                  <button className="auth-button mt-2" type="submit">
                    "Submit Order"
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default BookingModal;
