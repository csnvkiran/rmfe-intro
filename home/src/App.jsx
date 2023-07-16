import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header app={{ name: "home" }} />
    <div className="mt-10">
      Home Page Content
      <div>Name: home</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
