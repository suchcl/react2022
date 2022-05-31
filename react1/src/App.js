import './App.css';
import style from "./app.module.css";
import MyButton from './components/MyButton';
import Input from './components/Input';
import User from './components/User';
import UserList from './pages/UserList';
import Profile from './components/profile';
import Login from './components/Login';
import Products from './components/product';
import Link from './components/Link';
import Count from './components/Count';
import CountGroup from './components/CountGroup';
import FilterableProductTable from './components/FilterableProductTable';
import Gallery from './components/Gallery';
import { Button } from 'antd';
import PracticalTable from "./components/Table";

function App() {
  return (
    <div className="App">
      <MyButton></MyButton>
      <Button type="primary">antd中的Button</Button>
      <Input />
      <div className='divider'>华丽的分割线</div>
      <User />
      <UserList />
      <Profile />
      <Login />
      <Products />
      <Link />
      <div className={style.count}>
        <Count />
        <Count />
        <Count />
      </div>
      <div className={style.count}>
        <CountGroup />
      </div>
      <FilterableProductTable />
      <Gallery />
      <PracticalTable />
    </div>
  );
}

export default App;
