import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useQueryClient } from "@tanstack/react-query";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SpinLoader from "../../../../components/loaders/SpinLoader";

import { OrderDataTypes } from "../../../../types/OrderTypes";
import { request } from "../../../../utils/axios.utils";

const CheckoutForm = ({ order }: { order: OrderDataTypes }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [cardError, setCardError] = useState("");

  const price = order?.productPrice;

  useEffect(() => {
    request({
      url: `api/v1/stripeapi`,
      method: "post",
      data: { price },
    }).then((data) => {
      setClientSecret(data);
    });
  }, []);
  const queryClient = useQueryClient();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      if (error !== undefined) {
        setCardError(error?.message as string);
      }
      console.log(error);
    } else {
      setCardError("");
    }
    setLoading(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: order?.userName,
            email: order?.userEmail,
          },
        },
      });
    if (confirmError) {
      if (confirmError !== undefined) {
        setCardError(confirmError?.message as string);
        console.log(confirmError);
        setLoading(false);
      }
      return;
    }
    setCardError("");
    if (paymentIntent.status === "succeeded") {
      const payment = {
        username: order?.userName,
        userEmail: order?.userEmail,
        userPhoneNo: order?.phoneNo,
        productName: order?.productName,
        productId: order?.productId,
        productPrice: order?.productPrice,
        orderId: order?._id,
        paidAmount: paymentIntent.amount,
        transactionId: paymentIntent.id,
        transactionStatus: paymentIntent.status,
      };
      request({ url: `/api/v1/payment/process`, method: "post", data: payment })
        .then(() => {
          queryClient.invalidateQueries(["products"]);
          toast.success("Payment Successful");
          setLoading(false);
          navigate("/dashboard/my-orders");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-sky-500 px-4 py-1 rounded text-white mt-5 grid place-items-center"
          type="submit"
          disabled={!stripe || !clientSecret || loading}
        >
          {loading ? <SpinLoader /> : "Pay"}
        </button>
      </form>
      <p className="text-sm text-red-500 font-medium">{cardError}</p>
    </div>
  );
};

export default CheckoutForm;
