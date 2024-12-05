import React, { useState } from "react";

import { BodyWrapper, ContentWrapper } from "./Wrappers";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white w-full flex items-center justify-between absolute top-0 z-10 h-[10vh]">
      <div className="flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-gray-900">Roomies</div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (for small screens) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center py-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Find Roommates
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            List a Room
          </a>
        </div>
      )}

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Find Roommates
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          List a Room
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
