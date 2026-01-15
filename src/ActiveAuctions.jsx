import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";




function ActiveAuctions({handleAddFavorite }) {

    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        fetch("/file.json")
            .then(res => res.json())
            .then(data => setAuctions(data));
    }, [])
    console.log(auctions);
    return (
        <div>


            <section className='bg-gray-400 p-6 rounded-xl'>
                {/* title */}
                <h2 className='text-xl  font-semibold'>Active Auctions</h2>
                <p className='text-gray-500 text-sm mb-4'>
                    Discover and bid on extraodinary items
                </p>

                {/* Table */}
                <div className='bg-gray-600 rounded-xl overflow-hidden'>
                    <div className='grid grid-cols-4 px-6 py-3 text-sm font-semibold text-gray-500 border-b'>
                        <span>Items</span>
                        <span>Current Bid</span>
                        <span>Time Left</span>
                        <span className='text-right'>Bid Now</span>
                    </div>

                    {/* rows */}

                    {
                        auctions.map(item => (

                            <div key={item.id}

                                className='grid grid-cols-5 items-center px-6 py-4 border-b last:border-none'
                            >

                                <img src={item.image} alt=""
                                    className='w-14 h-14 rounded-md object-cover'
                                />

                                <p className='font-semibold'>
                                    {item.title}
                                </p>

                                {/* Price */}

                                <p className='font-semibold'>
                                   ৳  {item.currentBidPrice}
                                </p>

                                {/* Time */}

                                <p className='text-gray-500 text-sm'>
                                    {item.timeLeft}
                                </p>



                                <div className='flex justify-end'>

                                    <FaRegHeart
                                     onClick={() => handleAddFavorite(item)}
                                    className='text-gray-400 hover:text-red-500 cursor-pointer' />
                                </div>


                            </div>
                        ))
                    }


                </div>
            </section>
        </div>
    )
}







export default ActiveAuctions

// ---------




