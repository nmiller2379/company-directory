import React from "react";
import "./style.css";

// This component returns a jumbotron for the top of the page
function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee directory</h1>
        <p className="lead">Please search for employees by typing their first or last name into the search field below. To filter the entire table by first or last name, click on the arrow next to the field.</p>
      </div>
    </div>
  );
}

export default Jumbotron;