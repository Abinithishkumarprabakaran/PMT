import './App.css';

import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { Board, ChangePassword, Confirmation, ForgotPassword, Login, PageNotFound, Signup } from './components';

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
            <ProtectedRouteBoard>
              <Board />
            </ProtectedRouteBoard> 
          }/>
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
      
    </div>
  )
}

function ProtectedRouteBoard({ children }) {
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
