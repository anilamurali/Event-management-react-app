import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addevent from './Component/Addevent';
import Search from './Component/Search';
import Viewevent from './Component/Viewevent';
import Nav from './Component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
     <>
     <BrowserRouter>
     <Routes>
       <Route path='/' exact element={<Addevent/>}/>
       <Route path='/search' exact element={<Search/>}/>
      <Route path='/view' exact element={<Viewevent/>}/>
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
