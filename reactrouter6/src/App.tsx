import React, { useState } from 'react';
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom';
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
import NavigateList from '@/pages/NavigatorCmp/NavigateList';
import UseNavigateObj from '@/pages/UseNavigate/UseNavigateObj';
import UseNavigateList from '@/pages/UseNavigate/UseNavigateList';
import Detail from '@/pages/Detail';
import MessageList from '@/pages/Message/MessageList';
import MessageDetail from '@/pages/Message/MessageDetail'
import MessageOutletContainer from '@/pages/Message/MessageOutletContainer';
import Settings from '@/pages/Settings';
import SearchParams from "@/pages/SearchParams/SearchParams";
import router from './routes/router';

const navigateData = {
  name: "Nicholas Zakas",
  age: 18
};

const uList = [
  {
    id: 1,
    name: 'Nicholas Zakas',
    age: 16
  },
  {
    id: 2,
    name: "Andrew Berry",
    age: 21
  }
];


function App() {
  const [user, setUser] = useState(navigateData);
  const [userList, setUserList] = useState(uList);
  // 这里一定要使用函数，然后在组件内部通过组件方式调用
  const Router = () => useRoutes(router);
  return (
    <div className="App">
      <Header />
      <div className='page-container'>
        <Router />
        {/* <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/newsList" element={<NewsList />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/feedback' element={<Navigate to='/navigateCmp' state={"从feedback重定向来的"} />} />
          <Route path='/feed' element={<Navigate to='/navigateObj' state={user} />} />
          <Route path='/userList' element={<Navigate to={'/navigateList'} state={userList} />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/about' element={<Navigate to='/home' />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product2' element={<Product2 />} />
          <Route path='/productList' element={<ProductList />} />
          <Route path="/navigateCmp" element={<NavigateCmp />} />
          <Route path="/navigateObj" element={<NavigateObj />} />
          <Route path='/navigateList' element={<NavigateList />} />
          <Route path='/useNavigateObj' element={<UseNavigateObj />} />
          <Route path='/useNavigateList' element={<UseNavigateList />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path="/messageList/*" element={<MessageList />} />
          <Route path='/messageOutlet' element={<MessageOutletContainer />}>
            <Route path=":id" element={<MessageDetail />} />
          </Route>
          <Route path='/settings' element={<Settings />} />
          <Route path='/searchParams' element={<SearchParams />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
