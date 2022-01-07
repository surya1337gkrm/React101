import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';

function App() {
  const [login, setLogin] = useState(false);
  console.log(login);
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>React Router App</h1>
        <h4>User {login ? 'Logged In' : 'Logged Out'}</h4>
        <button
        onClick={() => {
          setLogin(!login);
        }}>
        {login ? 'Logout' : 'Login'}
      </button>
        <Header />
      </div>
      
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
