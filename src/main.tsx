import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import './index.css'

// generic index
import Index from './routes/Index';

// Result Pages
import ResultPage from './pages/ResultPage.tsx';

// Search Page Layout
import SearchPageLayout from './pages/SearchPageLayout.tsx';

//Anthology Page 
import AnthologyPage from './pages/AnthologyPage.tsx';

//Large Work Page
import LargeWorkPage from './pages/LargeWork.tsx';

import { sermonRouteInfo, songRouteInfo, symphonyRouteInfo, analysisRouteInfo } from './routeInfo.ts'

// Individual Page Info
import { songResultInfo, symphonyResultInfo, sermonResultInfo, analysisResultInfo } from './resultPageConfig.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
          <Route path="song" element={<SearchPageLayout routeInfo={songRouteInfo} />} />
          <Route path="song/:songId" element={<ResultPage resultPageInfo={songResultInfo} />} />
          <Route path="song/:songId/anthology/:title" element={<AnthologyPage routeInfo={songRouteInfo} />} />
          <Route path="song/:songId/large-work/:title" element={<LargeWorkPage routeInfo={songRouteInfo} />} />
          <Route path="song-analysis" element={<SearchPageLayout routeInfo={analysisRouteInfo} />} />
          <Route path="song-analysis/:songId" element={<ResultPage resultPageInfo={analysisResultInfo} />} />
          <Route path="song-analysis/:songId/anthology/:title" element={<AnthologyPage routeInfo={analysisRouteInfo} />} />
          <Route path="sermon" element={<SearchPageLayout routeInfo={sermonRouteInfo} />} />
          <Route path="sermon/:sermonId" element={<ResultPage resultPageInfo={sermonResultInfo} />} />
          <Route path="symphony" element={<SearchPageLayout routeInfo={symphonyRouteInfo} />} />
          <Route path="symphony/:symphonyId" element={<ResultPage resultPageInfo={symphonyResultInfo} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
