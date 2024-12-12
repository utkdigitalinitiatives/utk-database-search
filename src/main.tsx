import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import './index.css'
import Song from './routes/Song';
import Index from './routes/Index';
import SongPage from './routes/ResultPages/SongPage';
import Sermon from './routes/Sermon';
import Symphony from './routes/Symphony';
import TennesseeNews from './routes/TennesseeNews';
import SermonPage from './routes/ResultPages/SermonPage';
import SymphonyPage from './routes/ResultPages/SymphonyPage';
import TennesseeNewsPage from './routes/ResultPages/TennesseeNewsPage';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
          <Route path="song" element={<Song />} />
          <Route path="song/:songId" element={<SongPage />} />
          <Route path="sermon" element={<Sermon />} />
          <Route path="sermon/:sermonId" element={<SermonPage />} />
          <Route path="symphony" element={<Symphony />} />
          <Route path="symphony/:symphonyId" element={<SymphonyPage />} />
          <Route path="tennessee-news" element={<TennesseeNews />} />
          <Route path="tennessee-news/:newsId" element={<TennesseeNewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
