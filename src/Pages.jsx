import { BiLogoReact } from 'react-icons/bi';
import Home from './pages/Home';
import About from './pages/About';

const Pages = [
  {path: '/', name: 'Logo', element: <BiLogoReact className='text-6xl' />},
  { path: '/Home', name: 'Home', element: <Home />},
  {path: '/About', name: 'About App', element: <About />},
  // Add more pages here later
];

export default Pages;