import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSignup = () => {
    // Make a POST request to create a new user
    axios.post('http://localhost:3000/users', {
      username,
      password,
      avatar
    })
    .then(response => {
      console.log('User created:', response.data);
      toast.success("sign up successful")
    })
    .catch(error => {
      console.error('Error signing up:', error);
      toast.error("oops there is an error")
    });
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      <div className="mb-4">
        <input
         className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
         className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
        className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
