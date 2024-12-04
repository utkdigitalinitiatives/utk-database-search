import Footer from './components/Footer'
import NavBar from './components/Navbar'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
        <Outlet />
      <Footer />
    </div>
  )
}

export default App
