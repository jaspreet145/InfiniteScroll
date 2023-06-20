// import { connect } from 'react-redux'
"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Provider } from "react-redux";
import store from "../store/index";
import App from "./app";

export const page = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  );
};

export default page;
