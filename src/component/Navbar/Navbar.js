import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
          <Link to="/">Home</Link>|
          <Link to="/simple">Simple</Link>|
          <Link to="/linearea">LineArea</Link>|
          <Link to="/linestack">LineStack</Link>|
          <Link to="/multi">MultilinePage</Link>|
    </div>
  );
};

export default Navbar;