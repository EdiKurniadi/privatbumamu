import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PracticeConfig from './pages/PracticeConfig';
import Practice from './pages/Practice';
import Editor from './pages/Editor';
import Statistics from './pages/Statistics';
import Learning from './pages/Learning';
import Tryout from './pages/Tryout';
import TryoutSession from './pages/TryoutSession';
import TryoutResult from './pages/TryoutResult';
import Navbar from './components/Navbar'; // Import Navbar
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navbar /> {/* Render Navbar here */}
      <div className="pt-16"> {/* Add padding-top to prevent content from being hidden by fixed navbar */}
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
      </div>
    </Router>
  </StrictMode>
);