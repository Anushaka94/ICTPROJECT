
import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavbarComponent from './components/NavbarComponent';
import Logincomponents from './components/logincomponents';
import HomepageComponent from './components/HomePageComponent';
import Signup from './components/Signup';
import AdminPage from './components/AdminHome';
import Booking from './components/Booking';


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/login' element={<Logincomponents />}></Route>
        <Route path='/home' element={<HomepageComponent />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/Admin' element={<AdminPage />}></Route>
         <Route path='/booking' element={<Booking />}></Route>

      </Routes>
    </div>
  );
}

export default App
