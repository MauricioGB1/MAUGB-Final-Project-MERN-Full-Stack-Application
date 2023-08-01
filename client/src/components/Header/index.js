import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/IMG_0992.PNG";

import Auth from "../../utils/auth";
import { useSelector } from "react-redux";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Header = () => {
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };

    const state = useSelector((state) => state);

    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
    console.log(data);

    useEffect(() => {
        if (data) {
          stripePromise.then((res) => {
            res.redirectToCheckout({ sessionId: data.checkout.session });
          });
        }
      }, [data]);

      const checkout = () => {
        const projectIds = [];

      state.cart.forEach((item) => {
            item.forEach((project) => {
              projectIds.push(project._id);
            });
          });

    // state.cart[0].projects.forEach((item) => {
    //   if (item.id !== null) {
    //     projectIds.push(item.id);
    //   }
    // });
    console.log(projectIds);

    getCheckout({
        variables: { projects: projectIds },
      });
    };


