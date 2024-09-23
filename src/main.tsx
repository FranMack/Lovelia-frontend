import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import {
  IntentionContextProvider,
  MobileMenuContextProvider,
  ShopingCartContextProvider,
  TalismanButtonFocusContextProvider,
  TalismanModelContextProvider,
  UserContextProvider,
  VolumeContextProvider,
} from "./context/";
import { ActivationStepsContextProvider } from "./context/activationStepsContext.tsx";
import { TalismanAudioContextProvider } from "./context/talismanAudioContext.tsx";
import { TimerContextProvider } from "./context/timerContext.tsx";
import "./styles/styles.scss";

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
