import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import './index.css'

// generic index
import Index from './routes/Index';

// Result Pages
import SongPage from './routes/ResultPages/SongPage';
import SermonPage from './routes/ResultPages/SermonPage';
import TennesseeNewsPage from './routes/ResultPages/TennesseeNewsPage';
import ResultPage from './components/ResultPage.tsx';
let symphonyResultFields = ['title', 'composer_name', 'season', 'date']
// Overall Page Layout
import PageLayout from './components/PageLayout';
import { sermonRouteInfo, songRouteInfo, symphonyRouteInfo, newsRouteInfo } from './routeInfo.ts'

// Individual Page Info
import { songResultInfo, symphonyResultInfo } from './resultPageConfig.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
          <Route path="song" element={<PageLayout routeInfo={songRouteInfo} />} />
          <Route path="song/:songId" element={<ResultPage resultPageInfo={songResultInfo} />} />
          <Route path="sermon" element={<PageLayout routeInfo={sermonRouteInfo} />} />
          <Route path="sermon/:sermonId" element={<SermonPage />} />
          <Route path="symphony" element={<PageLayout routeInfo={symphonyRouteInfo} />} />
          <Route path="symphony/:symphonyId" element={<ResultPage resultPageInfo={symphonyResultInfo} />} />
          <Route path="tennessee-news" element={<PageLayout routeInfo={newsRouteInfo} />} />
          <Route path="tennessee-news/:newsId" element={<TennesseeNewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
