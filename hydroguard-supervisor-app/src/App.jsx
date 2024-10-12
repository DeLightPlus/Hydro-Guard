import './App.css'
import Login from './components/auth/signin';
import Register from './components/auth/signup';

import Dashboard from './components/Dashboard'
import Header from './components/Header'

import { useState } from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Patients from './components/Patients';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };


  return (

    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated}/>      
      <Routes>
        <Route path="/" element={<Dashboard isAuthenticated={isAuthenticated}/>} />
        <Route path="/patients" element={<Patients />} />

        <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
        <Route path="/register" element={<Register handleSignup={handleSignup}/>} />


      </Routes>
    </BrowserRouter>
  
  )
}

export default App
