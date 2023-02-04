import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";

import { TodoApp } from "./Todo/TodoApp";
import { store } from "./Store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TodoApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
