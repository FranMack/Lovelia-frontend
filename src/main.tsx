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

// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);

      // Check for updates
      registration.onupdatefound = () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.onstatechange = () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available; let the user know or automatically refresh
              console.log('New service worker available; will activate immediately.');
              window.location.reload(); // Optional: reload to get the new version
            }
          };
        }
      };
    }).catch((error) => {
      console.log('Service Worker registration failed:', error);
    });
  });
}
