import './App.css';
import MyButton from './components/MyButton';
import Input from './components/Input';
import User from './components/User';
import UserList from './pages/UserList';
import Profile from './components/profile';
import Login from './components/Login';
import Products from './components/product';
import Link from './components/Link';

function App() {
  return (
    <div className="App">
      <MyButton></MyButton>
      <Input />
      <div className='divider'>华丽的分割线</div>
      <User />
      <UserList />
      <Profile />
      <Login />
      <Products />
      <Link />
    </div>
  );
}

export default App;
