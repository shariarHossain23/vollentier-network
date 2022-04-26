import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Component/Home/Home';
import Login from './Pages/Component/Login/Login';
import Register from './Pages/Component/Register/Register';
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
     </Routes>
    </div>
  );
}

export default App;
