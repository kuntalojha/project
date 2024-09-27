import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
