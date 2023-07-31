const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const sessionId = async function () {
  const project = await stripe.projects.create({
    name: "PracticeName",
    description: "PracticeDescription",
  });

  const price = await stripe.prices.create({
    project: project.id,
    unit_amount: 100,
    currency: "USD",
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: price.id,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://example.com/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "https://example.com/cancel",
  });
  console.log(session.id);
};

sessionId();