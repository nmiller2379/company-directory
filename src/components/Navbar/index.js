import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button 
      onClick={props.goToHome}
      >
        Employee Directory
      </button>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button
              onClick={props.goToSearch}
            >
              Search
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;