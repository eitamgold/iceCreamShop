import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from "./Header";
import Order from './components/Order';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import ManagementPage from './components/ManagementPage';
import Missing from './components/Missing';
import { OrderProvider } from './OrderContext'; // Import the context provider

type Flavor = {
  name: string;
  price: number;
  isKosher: boolean;
  isGlutenFree: boolean;
  isDairyFree: boolean;
  key: number;
  color?: string;
};

function App() {
  const flavors: Flavor[] = [
    { name: 'vanila', price: 10.00, isKosher: true, isDairyFree: false, isGlutenFree: true, color: 'wheat', key: 1 },
    { name: 'oreo', price: 15.00, isKosher: true, isDairyFree: false, isGlutenFree: false, color: 'brown', key: 2 },
    { name: 'steak', price: 20.00, isKosher: false, isDairyFree: false, isGlutenFree: true, color: 'red', key: 3 }
  ];

  return (
    <OrderProvider>
      <div>
        <Header />
        <Router>
          <Routes>
            <Route path="/Order" element={<Order flavors={flavors} />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/" element={<HomePage flavors={flavors} />} />
            <Route path="/managementpage" element={<ManagementPage />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </Router>
      </div>
    </OrderProvider>
  );
}

export default App;
