import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import "./index.scss"
import GlobalStyles from "./styles/global"

ReactDOM.render(
    <>
        <GlobalStyles/>
        <App/>
    </>,
    document.getElementById("root")
)