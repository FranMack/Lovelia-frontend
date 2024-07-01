import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import ShopingCartContextProvider from "./context/modalShopingCart.tsx";
import UserContextProvider from "./context/userContext.tsx";
import TalismanModelContextProvider from "./context/talismanModelContext.tsx";
import TalismanButtonFocusContextProvider from "./context/talismanButtonFocusContext.tsx";
import VolumeContextProvider from "./context/volumeContext.tsx";
import IntentionContextProvider from "./context/intentionContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ShopingCartContextProvider>
          <TalismanModelContextProvider>
            <TalismanButtonFocusContextProvider>
              <VolumeContextProvider>
                <IntentionContextProvider>
            <App />
            </IntentionContextProvider>
            </VolumeContextProvider>
            </TalismanButtonFocusContextProvider>
          </TalismanModelContextProvider>
        </ShopingCartContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
