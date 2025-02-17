import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx';
import {
  IntentionContextProvider,
  MobileMenuContextProvider,
  ShopingCartContextProvider,
  TalismanButtonFocusContextProvider,
  TalismanModelContextProvider,
  UserContextProvider,
  VolumeContextProvider,
} from './context/';
import {ActivationStepsContextProvider} from './context/activationStepsContext.tsx';
import {CheckoutAddressContextProvider} from './context/checkoutAddressContext.tsx';
import {TalismanAudioContextProvider} from './context/talismanAudioContext.tsx';
import {TimerContextProvider} from './context/timerContext.tsx';
import { CurrencyContextProvider } from './context/currencyContext.tsx';
import './styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
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
                          <CheckoutAddressContextProvider>
                            <CurrencyContextProvider>
                            <App />
                            </CurrencyContextProvider>
                          </CheckoutAddressContextProvider>
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
  </React.StrictMode>,
);

// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log(
          'Service Worker registered with scope:',
          registration.scope,
        );

        // Listen for updates found
        registration.onupdatefound = () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.onstatechange = () => {
              if (newWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // New update available, prompt user or handle logic
                  console.log('New service worker available.');

                  // Optional: Notify user for manual reload
                  if (
                    confirm('New version available. Would you like to refresh?')
                  ) {
                    window.location.reload();
                  }
                } else {
                  // Service worker is installed for the first time
                  console.log('Service Worker installed for the first time.');
                }
              }
            };
          }
        };
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}
