import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <header className="bg-cyan-700 p-6">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="text-white font-semibold text-xl">
          <Link to="/">ALPHA</Link>
          </div>
          <button
            className="block lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {showMenu ? (
              <svg
                className="h-6 w-6 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 7.293a1 1 0 0 1 1.414-1.414L12 10.586l6.293-6.293a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 1 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L10.586 12 4.293 5.707a1 1 0 0 1 0-1.414z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              </svg>
            )}
          </button>
          <nav className={`lg:flex lg:items-center lg:w-auto ${showMenu ? 'block' : 'hidden'}`}>
            <ul className="flex flex-wrap space-x-4 lg:space-x-8">
              <li className="text-white hover:text-gray-300">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="text-white hover:text-gray-300">
                <Link to="/about" onClick={toggleMenu}>About</Link>
              </li>
              <li className="text-white hover:text-gray-300">
                <Link to="/skills" onClick={toggleMenu}>Skills</Link>
              </li>
              <li className="text-white hover:text-gray-300">
                <Link to="/projects" onClick={toggleMenu}>Projects</Link>
              </li>
              <li className="text-white hover:text-gray-300">
                <Link to="/contact" onClick={toggleMenu}>ContactMe</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
