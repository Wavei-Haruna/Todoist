import React, { useState } from 'react'
import Navbar from './Navbar';
import SignUp from './SignUp';
import LoginForm from './LoginForm';
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Todo from './Todos';
import { LoginContextProvider } from './Helpers/LoginContext';



export default function App() {

   const [isSignupVisible, setSignupVisible] = useState(false);
   const [isLoginVisible, setLoginVisible] = useState(false);
   

  const handleSignupClick = () => {
    setSignupVisible(!isSignupVisible);
    setLoginVisible(false)
  };
  const handleLoginClick = () => {
    setLoginVisible(!isLoginVisible);
    setSignupVisible(false);
  };
  

  return (
      <LoginContextProvider>
    <div > 
      <Navbar onSignupClick={handleSignupClick} onLogin={handleLoginClick} />
      {isSignupVisible && <SignUp/>}
      {isLoginVisible && <LoginForm />}
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </div>
</LoginContextProvider>
  )
}
