import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPanel from './pages/AdminPanel';
import GlobalLoader from './components/globals/GlobalLoader';
import CustomCursor from './components/globals/CustomCursor';
import Navbar from './components/globals/Navbar';
import Footer from './components/globals/Footer';
import './index.css';

function App() {
  return (
    <>
      <GlobalLoader />
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/admin/panel" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
