import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AuthContext } from "../../context/AuthContext";
import GoogleLogin from "../../components/login/GoogleLogin";
import SpinLoader from "../../components/loaders/SpinLoader";
import useDocTitle from "../../hooks/useDocTitle";
import axios from "axios";
// import { getAccessToken } from "../../utils/manageAccessToken";

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please Enter your Email" })
    .email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, { message: "Password Should be minimum 8 char long" }),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const Login = () => {
  useDocTitle("Login");

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    const { email, password } = data;
    setLoading(true);
    authContext
      ?.signIn(email, password)
      .then(({ user }) => {
        axios
          .post("https://swap-tune.vercel.app/api/v1/user/new", {
            name: user.displayName,
            email: user.email,
          })
          .then(({ data }) => {
            if (data.success && data.token) {
              localStorage.setItem("swap-tune", data.token);
            }
            setLoading(false);
            reset();
            toast.success("Login Successful");
            navigate(from, { replace: true });
          })
          .catch((err: any) => {
            toast.error("Something went wrong, please try again later");
            console.log(err.message);
          });
      })
      .catch((err: any) => {
        if (err.message == "Firebase: Error (auth/user-not-found).") {
          setLoading(false);
          toast.error("User not found, please register first");
        } else if (err.message == "Firebase: Error (auth/wrong-password).") {
          setLoading(false);
          toast.error("Wrong email or password");
        } else {
          setLoading(false);
          toast.error("Something went wrong, try again later");
        }
      });
  };

  const handleDemoLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading2(true);
    authContext
      ?.signIn(email, password)
      .then(({ user }) => {
        axios
          .post("https://swap-tune.vercel.app/api/v1/user/new", {
            name: user.displayName,
            email: user.email,
          })
          .then(({ data }) => {
            if (data.success && data.token) {
              localStorage.setItem("swap-tune", data.token);
            }
            setLoading2(false);
            toast.success("Login Successful");
            navigate(from, { replace: true });
          })
          .catch((err: any) => {
            toast.error("Something went wrong, please try again later");
            console.log(err.message);
          });
      })
      .catch((err: any) => {
        if (err.message == "Firebase: Error (auth/user-not-found).") {
          setLoading2(false);
          toast.error("User not found, please register first");
        } else if (err.message == "Firebase: Error (auth/wrong-password).") {
          setLoading2(false);
          toast.error("Wrong email or password");
        } else {
          setLoading2(false);
          toast.error("Something went wrong, try again later");
        }
      });
  };

  return (
    <div>
      <div className="mx-auto my-10 w-full max-w-md rounded-md bg-white p-4 shadow dark:bg-gray-900 dark:text-gray-100 sm:p-8">
        <h2 className="mb-5 text-center text-3xl font-semibold">Login</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ng-untouched ng-pristine ng-valid space-y-8"
        >
          <div className="space-y-3">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                placeholder="leroy@jenkins.com"
                className="input-form"
              />
              {errors.email?.message && (
                <p className="error-message">{errors.email?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                {...register("password")}
                id="password"
                placeholder="*****"
                className="input-form"
              />
              {errors.password?.message && (
                <p className="error-message">{errors.password?.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={`auth-button grid place-items-center ${
              loading && "cursor-not-allowed"
            }`}
          >
            {loading ? <SpinLoader /> : "login"}
          </button>
        </form>

        <div className="my-2 flex w-full items-center">
          <hr className="w-full dark:text-gray-400" />
          <p className="w-full px-3 text-center dark:text-gray-400">
            Demo Login
          </p>
          <hr className="w-full dark:text-gray-400" />
        </div>

        <div className="flex gap-2 items-center">
          <button
            onClick={() =>
              handleDemoLogin({
                email: "recruiterb@gmail.com",
                password: "12345678",
              })
            }
            className={`auth-button grid place-items-center ${
              loading2 && "cursor-not-allowed"
            }`}
          >
            {loading2 ? <SpinLoader /> : "Buyer"}
          </button>
          <button
            onClick={() =>
              handleDemoLogin({
                email: "seller@gmail.com",
                password: "12345678",
              })
            }
            className={`auth-button grid place-items-center ${
              loading2 && "cursor-not-allowed"
            }`}
          >
            {loading2 ? <SpinLoader /> : "Seller"}
          </button>
          <button
            onClick={() =>
              handleDemoLogin({
                email: "admin@gmail.com",
                password: "12345678",
              })
            }
            className={`auth-button grid place-items-center ${
              loading2 && "cursor-not-allowed"
            }`}
          >
            {loading2 ? <SpinLoader /> : "Admin"}
          </button>
        </div>

        <div className="my-2 flex w-full items-center">
          <hr className="w-full dark:text-gray-400" />
          <p className="w-full px-3 text-center dark:text-gray-400">
            or login with
          </p>
          <hr className="w-full dark:text-gray-400" />
        </div>

        <div className="my-3 flex gap-3">
          <GoogleLogin />
        </div>

        <p className="text-center text-sm dark:text-gray-400 mt-2">
          Not a member?{" "}
          <Link
            to="/register"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline focus:underline"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
