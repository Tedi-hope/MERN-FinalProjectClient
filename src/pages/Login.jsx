import Nav from '../components/Nav'
import react ,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Footer from '../components/Footer';

const Login = () => {
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');

   const navigate=useNavigate();
   const {enqueueSnackbar}=useSnackbar();

   const handleLogin=()=>{
    //console.log('handle login is called');
    axios
    .post('https://mern-final-project-server.vercel.app/user/login',{email,password})
    .then((response)=>{
      const {email, userId,token}=response.data;
      console.log('Email',email);
      localStorage.setItem('email',email);
      localStorage.setItem('userId',userId);
      localStorage.setItem('token',token);
      
      enqueueSnackbar('Login Successful', { variant: 'success' });
      navigate('/home',{state:{email}});

    })
    .catch((error)=>{
      console.log(error);
    })
   }

  return (
    <>
     <Nav />
     <div className="container-fluid h-screen px-3 py-5 bg-lightBlue w-full">
          <div className="flex flex-col justify-center items-center h-4/5 w-full">
            <form className="w-11/12 md:w-1/4 px-3 py-6 bg-white rounded-md border-2 border-lightBlue">
            <h2 className="mb-2 font-bold text-lg text-lightBlue">Login</h2>
             <label className="text-lightBlue font-bold">Email Address:</label><br />
             <input type="text" className="py-1 mb-7 mt-2 w-11/12 border-2" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} /><br />
             <label className="text-lightBlue font-bold">Password:</label><br />
             <input type="password" className="py-1 mb-7 mt-2 w-11/12 border-2" 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)} /><br />
             <button className="btn btn-sm text-white border-2 px-2 py-2
              bg-blue-700 rounded-md hover:scale-95 hover:border-blue-700
               hover:bg-white hover:text-black" type="button"
               onClick={handleLogin}>Login</button>
            </form>
          </div>
     </div>
     <Footer/>
    </>
    
  )
}

export default Login