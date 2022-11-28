import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import { useOrderData } from "../../../hooks/useOrdersData";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./sections/CheckoutForm";
import PingLoader from "../../../components/loaders/PingLoader";
import useDocTitle from "../../../hooks/useDocTitle";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  useDocTitle("Payment");
  const params = useParams();
  const { data: order, isLoading } = useOrderData(params.id as string);
  if (isLoading) {
    return <PingLoader />;
  }
  return (
    <div className="w-96 mx-auto mt-20">
      {order && (
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
