import './App.css';
import MyButton from './components/MyButton';
import Input from './components/Input';
import User from './components/User';
import UserList from './pages/UserList';

function App() {
  return (
    <div className="App">
      <MyButton></MyButton>
      <Input />
      <div className='divider'>华丽的分割线</div>
      <User />
      <UserList />
    </div>
  );
}

export default App;
