import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
//const Header = React.lazy(() => import("home/Header"));
import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";

const App = () => {
  //const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header />
      </SafeComponent>
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
