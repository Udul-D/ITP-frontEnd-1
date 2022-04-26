import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.common["authToken"] =
    localStorage.getItem("authToken");

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);
