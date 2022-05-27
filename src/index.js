import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import { Provider } from "react-redux";
import { store } from "./redux2";
// import { store } from "./redux/reducers";
// import Auth from "./components/auth/Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {localStorage.getItem("token") && (
            <Route path="/*" element={<App />} />
          )}
          {!localStorage.getItem("token") && (
            <Route path="/*" element={<Auth />} />
          )}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
