import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Fotter from "./Components/Fotter";
import Body from "./Components/Body";

var rootReact = ReactDOM.createRoot(document.getElementById("root"));

const AppRoot = () => {
  return(
    <div className="app-root">
      <Header />
      <Body />
      <Fotter />
    </div>
  );
};

rootReact.render(<AppRoot />);