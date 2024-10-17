// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import Card from './components/Card'

function App() {

  type dbItem = {
    dbName: string,
    endpoint: string,
    dbSummary: string,

  }

  const dbInfo: Array<dbItem> = [
    {
      dbName: "Song Database",
      endpoint: "/song",
      dbSummary: "Containing the Song Index and Song Analysis Index from the George F. Devine Music Library. Includes the words and music for over 50,000 songs in 15,000 collections of songs in the Music Library."
    },
    {
      dbName: "Song Database",
      endpoint: "/song",
      dbSummary: "Containing the Song Index and Song Analysis Index from the George F. Devine Music Library. Includes the words and music for over 50,000 songs in 15,000 collections of songs in the Music Library."
    },
    {
      dbName: "Song Database",
      endpoint: "/song",
      dbSummary: "Containing the Song Index and Song Analysis Index from the George F. Devine Music Library. Includes the words and music for over 50,000 songs in 15,000 collections of songs in the Music Library."
    },
    {
      dbName: "Song Database",
      endpoint: "/song",
      dbSummary: "Containing the Song Index and Song Analysis Index from the George F. Devine Music Library. Includes the words and music for over 50,000 songs in 15,000 collections of songs in the Music Library."
    },
  ]


  return (
    <>
      <NavBar />
      <main className=''>
        <div className='h-32 bg-utk-blue--accent'>
          <h1 className='text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white h-36'>Databases from UTK Libraries</h1>
        </div>
        <div className='container mx-auto py-2'>
          <div className='grid grid-col-1 sm:grid-cols-2 gap-5 justify-items-stretch py-3 mx-2'>
            {dbInfo.map((item, index) =>
              <Card
                key={index}
                dbName={item.dbName}
                endpoint={item.endpoint}
                summary={item.dbSummary}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
