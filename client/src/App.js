import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { createStore } from "redux";
import { reducer } from "./utils/reducers";
import { Provider } from "react-redux";
import { setContext } from '@apollo/client/link/context'
import { createHttpLink } from "@apollo/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import CustomerDashboard from "./pages/CustomerDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import Success from "./pages/Success";

import "bulma/css/bulma.min.css";

