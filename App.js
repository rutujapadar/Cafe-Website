import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Contact from './Components/About';
import Order from './Components/Order';
import Store from './Components/Store';
import Formm from './Components/Formm';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Order' element={<Order/>}/>
      <Route path='/Store' element={<Store/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Formm' element={<Formm/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
