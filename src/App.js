import React, { createContext, useReducer } from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Discover from './components/Discover';
import Places from './components/Places';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Aboutme from './components/Aboutme';
import Logout from './components/Logout';
import Error from './components/Error';

import { initialState, reducer } from './reducer/UseReducer';

//contextapi
export const UserContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    
    <>
    <UserContext.Provider value={{state, dispatch}}>

    
    <Navbar />
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/places" element={<Places />} />
      <Route path="/aboutme" element={<Aboutme />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Error />} />
        
      </Routes>
      </UserContext.Provider>
    
    
    </>
  )
}

export default App
