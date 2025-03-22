import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/ReduxStore.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const acc={"token_type":"Bearer","access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjI0ODk3LCJpYXQiOjE3NDI2MjQ1OTcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjdlNmYwNTFmLTExN2ItNDM4OS1iZTIwLTk1NWFjODg4N2FiNyIsInN1YiI6ImhhcnJzaGluZWU0MjJAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoia2FycGFnYW0gYWNhZGVteSBvZiBoaWdoZXIgZWR1Y2F0aW9uIiwiY2xpZW50SUQiOiI3ZTZmMDUxZi0xMTdiLTQzODktYmUyMC05NTVhYzg4ODdhYjciLCJjbGllbnRTZWNyZXQiOiJzYm9oWUJpS2pxcHFuc0N0Iiwib3duZXJOYW1lIjoiaGFycnNoaW5lZS5zIiwib3duZXJFbWFpbCI6ImhhcnJzaGluZWU0MjJAZ21haWwuY29tIiwicm9sbE5vIjoiMjJidGFkMDIzIn0.eAg-q8cQQyJU2xcfJuGPOrC8dQqvQyW3mKg9HeSpqs0","expires_in":1742624897};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path='*' element= {<App />} />
        </Routes>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
