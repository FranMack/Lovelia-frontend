import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import {
  UserContextProvider,
  ShopingCartContextProvider,
  MobileMenuContextProvider,
  TalismanModelContextProvider,
  TalismanButtonFocusContextProvider,
  VolumeContextProvider,
  IntentionContextProvider,
} from "./context/";
import { TimerContextProvider } from "./context/timerContext.tsx";
import { TalismanAudioContextProvider } from "./context/talismanAudioContext.tsx";
import { ActivationStepsContextProvider } from "./context/activationStepsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ShopingCartContextProvider>
          <TalismanModelContextProvider>
            <TalismanButtonFocusContextProvider>
              <VolumeContextProvider>
                <IntentionContextProvider>
                  <TimerContextProvider>
                    <TalismanAudioContextProvider>
                      <ActivationStepsContextProvider>
                        <MobileMenuContextProvider>
                  <App />
                  </MobileMenuContextProvider>
                  </ActivationStepsContextProvider>
                  </TalismanAudioContextProvider>
                  </TimerContextProvider>
                </IntentionContextProvider>
              </VolumeContextProvider>
            </TalismanButtonFocusContextProvider>
          </TalismanModelContextProvider>
        </ShopingCartContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
