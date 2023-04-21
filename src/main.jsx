import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { StateContext } from './context/StateContext';
import { Toaster } from 'react-hot-toast';
import { Layout } from './components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContext>
        <Layout>
          <Toaster />
          <App />
        </Layout>
      </StateContext>
    </BrowserRouter>
  </React.StrictMode>,
);
