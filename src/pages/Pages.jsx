import { BiLogoReact } from 'react-icons/bi';
import Home from './Home';
import About from './About';
import ToDo from './ToDo';

const Pages = [
  {path: '/', name: 'Logo', element: <BiLogoReact className='text-6xl' />},
  { path: '/Home', name: 'Home', element: <Home />},
  {path: '/About', name: 'About App', element: <About />},
  {path: '/ToDo', name: 'To Do List', element: <ToDo />}
  // Add more pages here later
];

export default Pages;