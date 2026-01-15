import React from 'react'

function Banner() {
  return (
    <div>
      <div 
      className="relative bg-cover bg-center h-96 flex items-center justify-start p-10 rounded-lg shadow-xl"
    //   style={{ backgroundImage: `url(${})` }}
    >
      {/* Overlay to darken the background image slightly */}
      <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
      
      {/* Content Container (relative to the banner div) */}
      <div className="relative z-10 text-white max-w-lg">
        <h1 className="text-4xl font-bold mb-4">
          Bid on <span className="text-blue-400">Unique Items</span> from Around the World
        </h1>
        <p className="mb-6 text-gray-200">
          Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
        </p>
        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          Explore Auctions
        </button>
      </div>
    </div>
    </div>
  )
}

export default Banner
