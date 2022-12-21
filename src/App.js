import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./components/pages/Home'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<div>Page not found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
