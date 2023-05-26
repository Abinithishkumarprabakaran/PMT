import { Confirmation } from './components/Login/Confirmation';
import { ForgotPassword } from './components/Login/ForgotPassword';
import { Login } from './components/Login/Login'
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Profile } from './components/Profile/Profile';
import { ChangePassword } from './components/Signup/ChangePassword';
import { Signup } from './components/Signup/Signup'
import './App.css';

import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";

function App() {

  const bgStyles = {
    borderRadius: "0px",
    backgroundColor: "rgb(141, 45, 232)",
    minHeight: "100vh",
  }

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/forgotpassword" element={ <ForgotPassword /> } />
        <Route path="/confirmation" element={ <Confirmation /> } />
        <Route path="/changepassword/:id" element={ 
          <ProtectedRoutePasswordChange>
            <ChangePassword /> 
          </ProtectedRoutePasswordChange>} />
        <Route path="/profile" element={ 
            <ProtectedRouteProfile>
              <Profile />
            </ProtectedRouteProfile> }/>
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
      
    </div>
  )
}

function ProtectedRouteProfile({ children }) {
  const token = localStorage.getItem('token');
  return (
    token ?
    <section>
      {children}
    </section> :
    <Navigate replace to="/"/>
  )
}

function ProtectedRoutePasswordChange({ children }) {
  const OTP = localStorage.getItem('OTP');
  return (
    OTP ?
    <section>
      {children}
    </section> :
    <Navigate replace to="/"/>
  )
}

export default App


