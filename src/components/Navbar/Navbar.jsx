import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className="flex items-center justify-between bg-white p-4 border-t-2 border-b-2 border-blue-500 shadow-md mt-4">
      {/* Logo Section */}
      <div className="text-xl font-bold text-gray-800">
        Auction
        <span className="text-yellow-400">Gallery</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li><a href="/" className="text-gray-600 hover:text-blue-600 transition duration-200">Home</a></li>
        <li><a href="/auctions" className="text-gray-600 hover:text-blue-600 transition duration-200">Auctions</a></li>
        <li><a href="/categories" className="text-gray-600 hover:text-blue-600 transition duration-200">Categories</a></li>
        <li><a href="/how-it-works" className="text-gray-600 hover:text-blue-600 transition duration-200">How it works</a></li>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        {/* Placeholder for search icon */}
        <div className="text-gray-600 hover:text-gray-800 cursor-pointer">🔍</div> 
        {/* Placeholder for profile picture */}
        <div className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"></div> 
      </div>
    </nav>
  


    </div>
  )
}

export default Navbar
