import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import NewsList from '@/pages/NewsList';
import Feedback from '@/pages/Feedback';
import Docs from '@/pages/Docs';

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
