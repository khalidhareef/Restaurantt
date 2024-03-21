import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import View from './components/View';

import Nonveg from './components/Nonveg';

import Homescreen from './screens/Homescreen';


import CartScreen from './screens/CartScreen';
import Review from './components/Review';


function App() {
  return (
   
  <BrowserRouter>
  
   <Routes>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/' element={<View/>}></Route>
    <Route path='/nonveg' element={<Homescreen/>}></Route>
  
    <Route path='/cart' element={<CartScreen/>}></Route>
    <Route path='/review' element={<Review/>}></Route>
   </Routes>
 
   </BrowserRouter>
  
  );
}


export default App;
