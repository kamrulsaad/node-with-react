import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';
import UpdateUser from './Components/UpdateUser/UpdateUser';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/:id' element={<UpdateUser></UpdateUser>}></Route>
        <Route path='user/add' element={<AddUser></AddUser>} ></Route> 
      </Routes>
    </div>
  );
}

export default App;
