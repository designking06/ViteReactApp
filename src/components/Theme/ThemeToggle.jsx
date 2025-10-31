import React from 'react';
import { useTheme } from '../../context/ThemeProvider';

export default function ThemeToggle() {
    const {theme, toggle} = useTheme();
    return (
        <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="px-3 py-1 rounded-md border"
            >
                {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
    );
}