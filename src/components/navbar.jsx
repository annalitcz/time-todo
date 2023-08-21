import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
            <Link className="logo" to={'/'}>GabutApp</Link>
        </div>
        <div className="nav-items">
          <Link className="nav-links" to={"time"}>
            time
          </Link>
          <Link className="nav-links" to={"weather"}>
            weather
          </Link>
          <Link className="nav-links" to={'todo'}>Todo List</Link>
        </div>
        <button><Link to={'https://github.com/annalitcz/time-todo'} target="_blank" rel="noopener noreferrer">GitHub</Link></button>
      </nav>
    </>
  );
};

export default Navbar;
