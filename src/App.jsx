import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner'
import ActiveAuctions from './ActiveAuctions'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import FavoriteItems from './components/FavoriteItems';
import Footer from './components/Footer';


const App = () => {
    const [favorites, setFavorites] = useState([]);


      // ❤️ add to favorite
const handleAddFavorite = (item) => {
    const exists = favorites.find(fav => fav.id === item.id);
    if (exists) return;

    setFavorites([...favorites, item]);
    toast.success("Added to favorites ❤️");
  };

    // ❌ remove favorite

    const handleRemoveFavorite = (id) => {
    const remaining = favorites.filter(item => item.id !== id);
    setFavorites(remaining);
  };


  return (
    <>
      
        <Navbar />
      
      <Banner />

      {/* <div className='grid grid-cols-1'>
        <ActiveAuctions />
      </div>

      <div className='grid grid-cols-3'>
        right
      </div> */}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div className="lg:col-span-2">
    <ActiveAuctions handleAddFavorite={handleAddFavorite}  />
  </div>

  <div className="bg-gray-100 p-4 rounded-xl">
    <FavoriteItems
          favorites={favorites}
          handleRemoveFavorite={handleRemoveFavorite}
        />
    
  </div>
        <ToastContainer position="top-right" />

</div>

 <Footer />


    </>
  )
}

export default App
