import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Admin from './Pages/Component/Admin/Admin';
import Event from './Pages/Component/Event/Event';
import EventUser from './Pages/Component/EventUser/EventUser';
import Home from './Pages/Component/Home/Home';
import Login from './Pages/Component/Login/Login';
import Register from './Pages/Component/Register/Register';
import Registerperson from './Pages/Component/Registerperson/Registerperson';
import RequireAuth from './Pages/Component/ReqireAuth/RequireAuth';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/'element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={
         <RequireAuth>
           <Register></Register>
         </RequireAuth>
       }></Route>
       <Route path='/shariar' element={<Registerperson></Registerperson>}></Route>
       <Route path='/admin'element={<Admin></Admin>}></Route>
       <Route path='/eventpost' element={<RequireAuth>
        <Event></Event>
       </RequireAuth>}></Route>
       <Route path='/event' element={<EventUser></EventUser>}></Route>
     </Routes>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
