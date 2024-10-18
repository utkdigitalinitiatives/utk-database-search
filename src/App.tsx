import Footer from './components/Footer'
import NavBar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='h-screen'>
      <NavBar />
        <Outlet />
      <Footer />
    </div>
  )
}

export default App
