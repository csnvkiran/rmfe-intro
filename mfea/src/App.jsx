import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";

import "./index.scss";

//const Header = React.lazy(() => import("home/Header"));
import Header from "home/Header";
import Footer from "home/Footer";
import MfeaContent from "./mfeaContent";

const App = () => {
  return (
    <BrowserRouter>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/product/:id" element={<MfeaContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
