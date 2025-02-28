import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/normalize.css";
import "./style/index.css";
import "./style/media.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
