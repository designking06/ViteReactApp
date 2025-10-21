// Authorization.js
import React, { useState, useEffect, useRef } from "react";

export default function Authorize({ setAuth }) {
  const [password, setPassword] = useState("");
  const [isLoggingIn, setLoggingIn] = useState(false);
  const timeoutRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "swordfish") {
      setLoggingIn(true);
      setTimeout(() => { 
        setAuth(true);
      },1500);
    } else {
      alert("Wrong password");
    }
  };

  // cleanup timeout if component unmounts early
  useEffect(() => {
          return () => clearTimeout(timeoutRef.current);
      }, []);

  return (
    <div id="authorization">
      <h1>Enter the Password</h1>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" disabled={setAuth}>
          { isLoggingIn ? "Logging in..." : "Log In"}
          </button>
      </form>
    </div>
  );
}
