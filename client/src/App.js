import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Homepage from './components/Homepage';
import Error from './components/Error';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <main>
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Routes to other pages would go here */}
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;