import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="mt-10">
      <HomeContent />
    </div>
    <Footer />
  </div>
);
//ReactDOM.render(<App />, document.getElementById("app"));
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
