import React from 'react';

export default function Header({pageTitle = "React App!"}) {
    return (
        <header className='header'>  
            <h1>{pageTitle}</h1>
        </header>
    )
}