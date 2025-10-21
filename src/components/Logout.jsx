import React, { useState, useEffect, useRef } from "react";

export default function Logout({setAuth}) {
    const [isLoggingOut, setLoggingOut] = useState(false);
    const timeoutRef = useRef(null);
    const handleLogout = (e) => {
        e.preventDefault();
        setLoggingOut(true);
        setTimeout(() => {
            setAuth(false);
        }, 1500);
    };
    // cleanup timeout if component unmounts early
    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (
        <button onClick={handleLogout} disabled={isLoggingOut}>
            { isLoggingOut ? "Logging out..." : "Logout"}
        </button>
    )
}