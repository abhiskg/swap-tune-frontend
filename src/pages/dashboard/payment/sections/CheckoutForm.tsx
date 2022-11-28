import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { OrderDataTypes } from "../../../../types/OrderTypes";
import { request } from "../../../../utils/axios.utils";

const CheckoutForm = ({ order }: { order: OrderDataTypes }) => {
  const [clientSecret, setClientSecret] = useState("");

  const price = order?.productPrice;

  useEffect(() => {
    request({
      url: `api/create-payment-intend`,
      method: "post",
      data: { price },
    }).then((data) => {
      setClientSecret(data);
    });
  }, []);

  const stripe = useStripe();
  const elements = useElements();

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

    if (error && error instanceof Error) {
      toast.error(error.message);
    } else {
      console.log(paymentMethod);
    }

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
    console.log("card", card);
    if (confirmError) {
      console.log(confirmError.message);
      return;
    }
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
    }
    console.log("paymentintend", paymentIntent);
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
        <button type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
