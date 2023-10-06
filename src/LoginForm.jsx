import React, { useState } from 'react';
import { useContext } from 'react';
import { LoginContext } from './Helpers/LoginContext';

const LoginForm = () => {
  
const {password, setPassword, username, setUsername, handleLogin,} = useContext(LoginContext);
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Log In</h2>
      <form className="mb-4">
        <input
         className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
      <div className="mb-4">
        <input
       className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        onClick={handleLogin}
      >
        Log In
      </button>
    </div>
  );
};

export default LoginForm;
