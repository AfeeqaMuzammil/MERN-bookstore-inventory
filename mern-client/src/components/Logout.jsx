
import React, { useContext } from 'react';
import { Authcontext } from '../contacts/AuthProvider'; 
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useContext(Authcontext);
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || "/";
  

    const handleLogout = () => {
        logout().then(() => {
    alert("Logout Successfully");
    navigate(from, { replace: true });
    }).catch((error) => {
    // An error happened.
    });
    }
  return (
    <div className='h-screen bg-sky-100 flex items-center justify-center'>
      <button className='px-8 py-2 text-white bg-blue-400' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout