import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/stor.js';
import App from './components/App.jsx';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
