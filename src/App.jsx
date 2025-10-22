import './App.css';
import React, {useState, useContext} from "react";
import { Routes, Route } from 'react-router-dom';

import Authorize from './components/Authorize';
import NavBar from './components/NavBar/NavBar.jsx';
import Pages from './Pages.jsx';
import Contact from './components/Contact/Contact.jsx';
import Logout from './components/Logout.jsx';

function App() {
  const [auth, setAuth] = useState(false);

  return (
  <>
  <div className="flex-col">
  </div>
    { 
    !auth ? 
      <Authorize setAuth={setAuth} /> 
    :
      <>
        <NavBar />
        <Routes>
      { Pages.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
            ))}
        </Routes>
        <Logout setAuth={setAuth} />
      </>
    }
  </>
  )
}

export default App;