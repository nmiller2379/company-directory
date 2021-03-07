import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
function App() {
console.log("app running");
  return (
    <Router>
      <div>
        <Jumbotron />
        <Wrapper>
          <Home />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
