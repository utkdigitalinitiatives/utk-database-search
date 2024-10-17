// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import Card from './components/Card'

function App() {

  type dbItem = {
    dbName: string,
    page: string,
    dbSummary: string,

  }

  const dbInfo:Array<dbItem> = [
    {
      dbName: "Song Database",
      page: "/song",
      dbSummary: "Containing the Song Index and Song Analysis Index from the George F. Devine Music Library. Includes the words and music for over 50,000 songs in 15,000 collections of songs in the Music Library. Also includes analyses, descriptions, and program notes for musical compositions in the Music Library book collection. Use in conjunction with Harold Diamond’s book, Music Analyses: An Annotated Guide to the Literature."
    },
  ]


  return (
    <>
      <NavBar />
      <main className=''>
        <div className='h-32 bg-utk-blue--accent'>
          <h1 className='text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white h-36'>Databases from UTK Libraries</h1>
        </div>
        <div className='grid grid-col-1 sm:grid-cols-2 gap-10 justify-items-stretch py-3 mx-2'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
