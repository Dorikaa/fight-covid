import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GxpDhITglbAZFsnnMdIQKssZlg8WpEQtjwQO3G5NUVnB3gzEd1m3vcKzDftBKjXP1PjQpdO3zhtDhZTXXhEgbC8007uO3wTOt";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
    window.location = "/";
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Fight-Covid19"
      billingAddress
      shippingAddress
      image="https://image.flaticon.com/icons/svg/3022/3022487.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
