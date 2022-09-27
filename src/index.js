import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import ApiSlice from "./features/ApiSlice";
import { ApiFetch } from "./utils";

const store = configureStore({
  reducer: {
    api: ApiSlice,
  },
});

store.dispatch(ApiFetch());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
