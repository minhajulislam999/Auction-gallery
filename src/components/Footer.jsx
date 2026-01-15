import React from 'react'

function Footer() {
    return (
        <div>
            <footer className='bg-gray-300 py-16'>
                <div className='max-w-6xl mx-auto text-center'>

                    {/* Logo */}
                    <h2 className='text-2xl font-bold'>
                        <span className='text-blue-600'>Auction</span>
                        <span className='text-yellow-400'>Gallery</span>
                    </h2>

                    {/* Tagline */}

                    <p className='mt-2 text-sm text-gray-600'>
                        Bid. <span className='mx-1'>Win.</span> Own.
                    </p>

                    {/* Navigation */}

                    <ul className='flex justify-center gap-8 mt-6 text-gray-700 text-sm'>
                        <li className='hover: text-blue-600 cursor-pointer'>Home</li>
                        <li className='hover: text-blue-600 cursor-pointer'>Auction</li>
                        <li className='hover: text-blue-600 cursor-pointer'>Categories</li>
                        <li className='hover: text-blue-600'>How to works</li>
                    </ul>

                    {/* Copyright */}

                    <p className='mt-8 text-xs text-gray-500'>
                        © 2025 AuctionHub. All rights reserved.

                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
