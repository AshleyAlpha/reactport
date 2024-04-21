import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="bg-cyan-700 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-xl">Your Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li className="text-white hover:text-gray-300"><Link to="/">Home</Link></li>
            <li className="text-white hover:text-gray-300"><Link to="/about">About</Link></li>
            <li className="text-white hover:text-gray-300"><Link to="/skills">Skills</Link></li>
            <li className="text-white hover:text-gray-300"><Link to="/projects">Projects</Link></li>
            <li className="text-white hover:text-gray-300"><Link to="/contact">ContactMe</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  )
  
};

export default Header;
