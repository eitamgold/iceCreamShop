
import Header from "./Header";
import Order from './components/Order';
import SignIn from './components/SignIn'
import HomePage from './components/HomePage'
import ManagementPage from './components/ManagementPage'
import Missing from './components/Missing';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState, useEffect } from "react";

type Flavor = {
  name: string;
  price: number;
  isKosher: boolean;
  isGlutenFree: boolean;
  isDairyFree: boolean;
  key: number;
  color?: string;
}

function App() {
  const flavors: Flavor[] = [{
    name: 'vanila',
    price: 10.00,
    isKosher: true,
    isDairyFree: false,
    isGlutenFree: true,
    color: 'wheat',
    key: 1
  }, {
    name: 'oreo',
    price: 10.00,
    isKosher: true,
    isDairyFree: false,
    isGlutenFree: false,
    color: 'brown',
    key: 2
  }, {
    name: 'steak',
    price: 10.00,
    isKosher: false,
    isDairyFree: false,
    isGlutenFree: true,
    color: 'red',
    key: 3
  }, {
    name: 'oreo',
    price: 10.00,
    isKosher: true,
    isDairyFree: false,
    isGlutenFree: false,
    color: 'brown',
    key: 4
  }, {
    name: 'steak',
    price: 10.00,
    isKosher: false,
    isDairyFree: false,
    isGlutenFree: true,
    color: 'red',
    key: 5
  }]

  const [orderList, setOrderList] = useState<string[]>([]);

  console.log(orderList);

  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path="/Order" element={<Order flavors={flavors} orderList={orderList}/>}/>
            
          <Route path="/signIn" element={<SignIn/>}/>

          <Route path="/" element={<HomePage flavors={flavors} setOrderList={setOrderList}/>}/>

          <Route path="/managementpage" element={<ManagementPage/>}/>

          <Route path="*" element={<Missing/>}/>
        </Routes>
      </Router>

  </div>
  )
}

export default App
