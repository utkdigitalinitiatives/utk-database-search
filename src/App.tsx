// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/Navbar'

function App() {

  return (
    <>
      <NavBar />
      <main className='grid grid-rows-3'>
        <div className='bg-utk-blue--accent'>
          <h1 className='text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white h-36'>Databases from UTK Libraries</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
