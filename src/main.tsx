import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import './index.css'
import Song from './routes/Song';
import Index from './routes/Index';
import SongPage from './routes/SongPage';
import Sermon from './routes/Sermon';
import Symphony from './routes/Symphony';
import TennesseeNews from './routes/TennesseeNews';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
          <Route path="song" element={<Song />} />
          <Route path="song/:songId" element={<SongPage />} />
          <Route path="sermon" element={<Sermon />} />
          <Route path="symphony" element={<Symphony />} />
          <Route path="tennessee-news" element={<TennesseeNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
