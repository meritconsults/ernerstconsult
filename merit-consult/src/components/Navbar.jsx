import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Website Name */}
          <div className="text-xl font-semibold text-blue-700">
            Merit Consult
          </div>

          {/* Hamburger Toggle (Mobile) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6">
            <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link to="/payment" className="text-gray-800 hover:text-blue-600">Application</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-3 space-y-2">
          <Link to="/" className="block text-gray-800 hover:text-blue-600">Home</Link>
          <Link to="/payment" className="block text-gray-800 hover:text-blue-600">Application</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
