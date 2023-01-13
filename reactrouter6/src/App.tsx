import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import NewsList from '@/pages/NewsList';
import Feedback from '@/pages/Feedback';
import Docs from '@/pages/Docs';
import PageNotFound from '@/pages/Error/PageNotFound';
// import About from '@/pages/About';
import Product from '@/pages/Product';
import Product2 from '@/pages/Product/Product2';
import ProductList from '@/pages/ProductList';
import NavigateCmp from '@/pages/NavigatorCmp';
import NavigateObj from '@/pages/NavigatorCmp/NavigateObj';

const navigateData = {
  name: "Nicholas Zakas",
  age: 18
};

function App() {
  const [user, setUser] = useState(navigateData);
  return (
    <div className="App">
      <Header />
      <div className='page-container'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/newsList" element={<NewsList />} />
          {/* <Route path='/feedback' element={<Feedback />} /> */}
          <Route path='/feedback' element={<Navigate to='/navigateCmp' state={"从feedback重定向来的"} />} />
          <Route path='/feed' element={<Navigate to='/navigateObj' state={user} />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/about' element={<Navigate to='/home' />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product2' element={<Product2 />} />
          <Route path='/productList' element={<ProductList />} />
          <Route path="/navigateCmp" element={<NavigateCmp />} />
          <Route path="/navigateObj" element={<NavigateObj />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
