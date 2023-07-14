import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
const Header = React.lazy(() => import("home/Header"));
//import Header from "home/Header";
import Footer from "home/Footer";
4;
const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      {showHeader && (
        <Suspense fallback={<div>Loading..</div>}>
          <Header />
        </Suspense>
      )}
      <button className="p-5" onClick={() => setShowHeader(!showHeader)}>
        Show Header Content
      </button>
      <div className="mt-10">
        micro frontend Page Content
        <div>Name: mfea</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Tailwind</div>
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
