import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { StateProvider } from 'context/StateProvider';
import { initialSate } from 'context/initialState';
import reducer from 'context/reducer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <StateProvider initialState={initialSate} reducer={reducer}>
        <App />
      </StateProvider>
    </Router>
  </React.StrictMode>
);

