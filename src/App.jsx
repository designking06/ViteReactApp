import './App.css';
import React, {useState, useContext, useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import ThemeToggle from './components/Theme/ThemeToggle.jsx';
import Authorize from './components/Authorize';
import Pages from './Pages.jsx';
import Contact from './components/Contact/Contact.jsx';
import Logout from './components/Logout.jsx';

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // Add a class to the <html> element (which is the :root in CSS)
    document.getElementById('root').classList.add('dark:bg-gray-900', 'dark:text-gray-100', 'w-full', 'items-center', 'justify-center');

    // Optional: Clean up the class when the component unmounts
    return () => {
      document.getElementById('root').classList.remove('dark:bg-gray-900', 'dark:text-gray-100');
    };
  }, []);

  return (
  <>
    { 
    !auth ? 
      <Authorize setAuth={setAuth} /> 
    :
      <div className="min-h-screen my-32">
      <ThemeToggle />
        <Routes>
      { Pages.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
            ))}
        </Routes>
        <Logout setAuth={setAuth} />
      </div>
    }
  </>
  )
}

export default App;