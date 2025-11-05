import React from 'react';  
import { NavLink } from 'react-router-dom';
import Pages from '../../pages/Pages.jsx';

export default function NavBar() { 

const NavLinks = Pages.map(
    ({ path, name }) => {
        return (
            <NavLink           
            key={path}
            to={path}
            end={path === '/'}
            className="font-semibold text-2xl"> 
                &nbsp;{name}
            </NavLink>
        )
    }
);

return (
    <nav className='bg-slate-800 shadow-lg flex items-center justify-around py-3 px-32 fixed top-0 left-0 w-full'>
        {NavLinks}
        </nav>
)

}