import App from './App.tsx'
import Song from './routes/Song.tsx'
import Index from './routes/Index.tsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // need to add errr page element here
        children: [
            { index: true, element: <Index />},
            {
                path: "/song",
                element: <Song />
            }
        ]
    },

])

export default router