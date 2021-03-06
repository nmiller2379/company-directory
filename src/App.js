import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Search from "./pages/Search"
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Home />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
