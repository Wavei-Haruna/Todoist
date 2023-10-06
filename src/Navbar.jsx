import React from 'react';

const Navbar = ({ onSignupClick, onLogin }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">Todo App</div>
        <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500" onClick={onSignupClick}>
          Sign Up
        </button>
        <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500" onClick={onLogin}>
          Login 
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
