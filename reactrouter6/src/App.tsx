import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import NewsList from '@/pages/NewsList';
import Feedback from '@/pages/Feedback';
import Docs from '@/pages/Docs';
import PageNotFound from '@/pages/Error/PageNotFound';
import About from '@/pages/About';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='page-container'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/newsList" element={<NewsList />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/about' element={<Navigate to='/home' />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
