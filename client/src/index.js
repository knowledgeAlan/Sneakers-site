import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { MetaMaskProvider } from "@metamask/sdk-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "Metamask login",
          url: window.location.href,
        },
        infuraAPIKey: process.env.INFURA_API_KEY,
        // Other options.
      }}
    >
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  </MetaMaskProvider>
);
