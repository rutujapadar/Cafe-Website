import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './Components/About';
import Order from './Components/Order';
import Store from './Components/Store';
import Formm from './Components/Formm';
import Addtb from './Components/Addtb';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Order' element={<Order/>}/>
      <Route path='/Store' element={<Store/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Formm' element={<Formm/>}/>
      <Route path='/Addtb' element={<Addtb/>}/>
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
