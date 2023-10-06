import axios from 'axios';
import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


export const LoginContext = createContext({});
 
export function LoginContextProvider({children}){
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)


 
 const handleLogin = async () => {
  setLoading(true)
  try {
    const response = await axios.get(`http://localhost:3000/users?username=${username}&password=${password}`);
    if (response.data.length > 0) {
      setUser(response.data[0]);
       if (user !== null) {
      navigate("/dashboard"); // Redirect to the dashboard when currentUser is set
      console.log(user)
     
    }
      toast.success("Login success");
    } else {
      console.error('Invalid credentials');
      toast.error("Oops, invalid credentials");
    }
  } catch (error) {
    console.error('Error logging in:', error);
    toast.error("Oops, login error");
  }
  finally{
    setLoading(false)
 }
};

  
  return(

<LoginContext.Provider value={{handleLogin, username, setPassword, password, setUsername, user, loading}}>{children}</LoginContext.Provider>
  )
}