import App from './App.tsx'
import Song from './pages/Song.tsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/song",
        element: <Song />
    }

])

export default router