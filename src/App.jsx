import './App.css';
import React, {useState, useContext} from "react";

import Authorize from './components/Authorize'
import Contact from './components/Contact'
import Logout from './components/Logout.jsx'

function App() {
  const [auth, setAuth] = useState(false);

  return (
  <>
    Hello, Codecademy!
    { 
    !auth ? 
      <Authorize setAuth={setAuth} /> 
    :
      <>
        <Contact />
        <Logout setAuth={setAuth} />
      </>
    }
  </>
  )
}

export default App;