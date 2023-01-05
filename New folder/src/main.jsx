import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
  domain="shafqatdeveloper.us.auth0.com"
  clientId="YcCJ91Ic7AUMmUecBJuwDHF9BAt7H2Vy"
  redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
