import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches ? 'dark' : 'light'; 
    });

    useEffect(() =>{
        const root = document.documentElement;
        if(theme === 'dark') root.classList.add('dark');
        else root.classList.remove('dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggle = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>

}

export const useTheme = () => useContext(ThemeContext);