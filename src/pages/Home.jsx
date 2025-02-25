import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';
import { MdOutlineDelete } from 'react-icons/md';
import { formatDistanceToNow } from 'date-fns';
import gymlogot from '../images/gymlogot.png';


const Home = () => {
  const[exerciseSizeTitle,setExerciseSizeTitle]=useState('');
  const[load,setLoad]=useState('');
  const[preps,setPreps]=useState('');
  const [error, setError] = useState(''); // New state for validation error message

  const[gymInfo,setGymInfo]=useState([]);
  const navigate=useNavigate();
  const emailLocal=localStorage.getItem('email');
  //console.log(Email);

  //To prevent access to this page without login
  useEffect(() => {
    const emailLocal = localStorage.getItem('email');
    if (!emailLocal) {
        navigate('/');
    }
}, []);
  
  const handleLogOut=()=>{
   localStorage.removeItem('email');
   localStorage.removeItem('token');
   navigate('/');
  }


  const handleUpload=()=>{
    
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found, redirecting to login.");
        navigate('/');
        return;
    }
    // Form validation
    if (!exerciseSizeTitle || !load || !preps) {
      setError("All fields are required!");
      return;
    }

    setError(""); // Clear error when fields are valid

    const gymData={
      exerciseSizeTitle,
      load,
      preps,
      userId: localStorage.getItem('userId')

    };
    axios
     .post('http://localhost:8888/gym',gymData)
     .then((res)=>{
       console.log(res.data)
       setGymInfo([...gymInfo,res.data]);//Update state to add new entry
       setExerciseSizeTitle(''); //Clear form fields
       setLoad('');
       setPreps('');
      })
     .catch((error)=>{
      console.error("Error uploading:", error);
     });
  }
  
  useEffect(()=>{
   axios
       .get('http://localhost:8888/gym')
       .then((res)=>{
         setGymInfo(res.data.data || []);//Ensure it is an array
         //console.log(res.data.data);
       })
       .catch((err)=>{
        console.error("Error fetching data:", err);
       })
  },[]);

  return (
    <>
      <div className="container-fluid px-4 py-2 bg-darker">
        <div className="flex justify-between items-center ">
          <div className="flex">
             <img src={gymlogot} alt="Gym logo" className="w-28 h-18 hover:scale-95" />
             <h1 className="text-white text-lg font-bold uppercase mt-10">My WorkOut GYM</h1>
          </div>
          <div className="flex space-x-12 ">
            <p className="text-white text-base mt-1.5">{emailLocal}</p>
            <p className="text-white text-base mt-1.5">Worked For:</p>
            <Link to='/schedule' className="text-white text-base mt-1.5 hover:text-orange-600 ">Gym Schedule</Link>
            <button className="ml-10 btn btn-sm border-2 px-2 py-1 border-white text-white
            rounded-md hover:scale-95 hover:bg-blue-700 hover:border-black hover:text-white" type="button"
            onClick={handleLogOut}>Log Out</button>
          </div>
        </div>
    </div>

    <div className=" container-fluid h-screen px-3 py-5 bg-lightBlue text-white">
        <div className="relative flex justify-between space-x-14 
        space-y-0 p-4 w-full">

          {/*Left Side-Gym Info (Only if there is data) */}
          <div className="flex flex-col space-y-10 w-4/5">
          {gymInfo.length > 0 ? (
            gymInfo.map((gym,index)=>(
           <div key={index} className="flex justify-between  p-4 rounded-lg bg-darker text-white shadow-md shadow-emerald-100">
              <div className="flex flex-col">
                <h3 className="text-violet-600 font-bold text-lg capitalize">{gym.exerciseSizeTitle}</h3>

                <p>Load(Kg):{gym.load}</p>
                <p>Preps:{gym.preps}</p>
                <p>
                  {
                   gym.createdAt ? formatDistanceToNow(new Date(gym.createdAt),{addSuffix:true})
                   :"time unknown"
                  }
                </p>
              </div>
              <div className="flex items-start">
                <Link to={`/gym/delete/${gym._id}`}>
                <h3>
                   <MdOutlineDelete className=" w-10 h-6"/>
                </h3>
                </Link>
              </div>
           </div>
           ))
          ):(
            <p className="text-center text-gray-500">No workouts added yet...</p>
          )}

         </div>
         
         {/* Right Side - Form (Always Visible) */}
           <div className="relative w-1/5  px-3 py-4 -top-5">
             <div>
             <h3 className="text-center mb-2 font-bold">Add a New Workout</h3>
             <label>Exercisesize Title:</label><br />
             <input type="text" className="py-1 mb-7 mt-2 text-black" 
             value={exerciseSizeTitle}
             onChange={(e)=>setExerciseSizeTitle(e.target.value)}/><br />
             <label>Load(in Kg):</label><br />
             <input type="number" className="py-1 mb-7 mt-2 text-black" 
             value={load}
             onChange={(e)=>setLoad(e.target.value)}/><br />
             <label>Preps:</label><br />
             <input type="number" className="py-1 mb-7 mt-2 text-black" 
             value={preps}
             onChange={(e)=>setPreps(e.target.value)}/><br />
             <button className="btn btn-sm text-white border-2 px-2 py-2
              bg-blue-700 rounded-md hover:scale-95 hover:border-blue-700 hover:bg-white hover:text-black" type="button"
              onClick={handleUpload}>Add Workout</button>
             <div className="mx-auto mt-4">
             {error && <p className="text-red-600 
                            text-base">{error}</p>}
             </div>
            </div>
           </div>
        </div>

    </div>

    </>
  )
}

export default Home