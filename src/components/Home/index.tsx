import React from "react";
import { loadStripe } from "@stripe/stripe-js";

// import { Container } from './styles';

let stripePromise: any;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51Le2chB2qGGpYS9f93VHxexL8Y1lQhqQO39UbBUmbwrK96l0UFOtO7rfmu37ixrWVystmCS6SZdW57Qp7EwlyBgS00D1v3alGf"
    );
  }

  return stripePromise;
};

const Home: React.FC = () => {
  const myPlan = {
    price: "price_1Le2hOB2qGGpYS9fuNlGorBR",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [myPlan],
    mode: "subscription",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    console.log("redirect checkout");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log(error, "error checkout");
  };

  return (
    <div className="App">
      <div>Bem vindo!</div>
      <button
        style={{
          width: "200px",
          height: "90px",
          background: "purple",
          color: "white",
        }}
        onClick={redirectToCheckout}
      >
        Inscrever-me no uxdoc!
      </button>
    </div>
  );
};

export default Home;
