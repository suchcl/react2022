import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import NewsList from '@/pages/NewsList/index';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='page-container'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/newsList" element={<NewsList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
