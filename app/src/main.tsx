import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import ShopingCartContextProvider from "./context/modalShopingCart.tsx";
import UserContextProvider from "./context/userContext.tsx";
import TalismanModelContextProvider from "./context/talismanModelContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ShopingCartContextProvider>
          <TalismanModelContextProvider>
            <App />
          </TalismanModelContextProvider>
        </ShopingCartContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
