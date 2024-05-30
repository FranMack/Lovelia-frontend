import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/styles.scss'
import { BrowserRouter } from "react-router-dom";
import ShopingCartContextProvider from './context/modalShopingCart.tsx';
import UserContextProvider from './context/userContext.tsx';
import TalismanModelContextProvider from './context/talismanModelContext.tsx';
import TalismanMaterialContextProvider from './context/talismanMaterialContext.tsx';
import TalismanRockContextProvider from './context/talismanModelRock.tsx';
import TalismanChainContextProvider from './context/talismaChainContext.tsx';
import TalismanIntentionsContextProvider from './context/talismanIntentionsContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
<UserContextProvider>
    <ShopingCartContextProvider>
      <TalismanModelContextProvider>
        <TalismanMaterialContextProvider>
          <TalismanRockContextProvider>
            <TalismanChainContextProvider>
              <TalismanIntentionsContextProvider>
    <App />
    </TalismanIntentionsContextProvider>
    </TalismanChainContextProvider>
    </TalismanRockContextProvider>
    </TalismanMaterialContextProvider>
    </TalismanModelContextProvider>
    </ShopingCartContextProvider>
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)


