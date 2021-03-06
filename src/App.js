import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Search from "./pages/Search"
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import PagePicker from './components/pagePicker';
function App() {
console.log("app running");
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <PagePicker />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
