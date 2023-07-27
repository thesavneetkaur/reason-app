import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { client } from "./prismic";
import { PrismicProvider } from "@prismicio/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>
);
