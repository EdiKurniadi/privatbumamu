import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PracticeConfig from './pages/PracticeConfig';
import Practice from './pages/Practice';
import Editor from './pages/Editor';
import Statistics from './pages/Statistics';
import Learning from './pages/Learning';
import Tryout from './pages/Tryout';
import TryoutSession from './pages/TryoutSession';
import TryoutResult from './pages/TryoutResult';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/practice-config" element={<PracticeConfig />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/tryout" element={<Tryout />} />
        <Route path="/tryoutSession/:packageId" element={<TryoutSession />} />
        <Route path="/tryoutResult" element={<TryoutResult />} />
      </Routes>
    </Router>
  </StrictMode>
);