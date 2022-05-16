import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import PostReducer from "./store/Reducer";
import thunk from "redux-thunk";

const store = createStore(
  PostReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
