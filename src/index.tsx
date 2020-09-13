import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from "react-redux"
// import { configureStore, Action } from "@reduxjs/toolkit"
// import { ThunkAction } from "redux-thunk"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const store = configureStore({
//   reducer: {
// // middleware: ['array of middlewares'],
//   // devTools: process.env.NODE_ENV !== "development" ? false : true,
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
