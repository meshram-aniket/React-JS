import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';
import Read from './Components/Read';
import 'bootstrap/dist/css/bootstrap.min.css'
import GetData from './Components/GetData';
import PostData from './Components/PostData';
import Myhome from './Components/Myhome';

function App() {
  return (
    <div className="App">
      

      {/* <BrowserRouter>
      <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/gets' element={<GetData/>}></Route>
          <Route path='/create' element={<PostData/>}></Route>
          
        </Routes>

      </BrowserRouter> */}
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/read/:id' element={<Read/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
