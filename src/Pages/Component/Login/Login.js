import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../logos/google.png';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let navigate = useNavigate();
    let location = useLocation();
    let [user1] = useAuthState(auth);
  
    let from = location.state?.from?.pathname || "/";

    if(user1){
        navigate(from, { replace: true });
    }
    
    return (
        <div className='w-[400px] px-6  border-2 h-[250px] mx-auto mt-24 text-center'>
           <div className='mt-16'>
           <h1 className='md:text-2xl font-bold '>Login</h1>
            <div onClick={()=> signInWithGoogle()}  className=' w-full border-2 rounded-full flex items-center mt-4 p-2'>
                <img width={30} src={logo} alt="" />
              <button className=' ml-20 text-xl'>Continue with Google</button>
            </div>
           </div>
        </div>
    );
};

export default Login;