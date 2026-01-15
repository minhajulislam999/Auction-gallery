import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner'
import ActiveAuctions from './ActiveAuctions'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      
      <Banner />

      <div className='grid grid-cols-1'>
        <ActiveAuctions />
      </div>

      <div className='grid grid-cols-3'>
        right
      </div>
      </div>

    </>
  )
}

export default App
