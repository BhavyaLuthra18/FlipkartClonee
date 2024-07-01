import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

// Getting Client id from local Storage
if (process.env.REACT_APP_PAYPAL_CLIENT_ID) {
  localStorage.setItem(
    "paypalClientId",
    process.env.REACT_APP_PAYPAL_CLIENT_ID
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
