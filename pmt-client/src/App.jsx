import './App.css';

import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { AppLayout, Board, ChangePassword, Confirmation, CreateProject, ForgotPassword, Login, PageNotFound, Signup} from './components';



import { useState, createContext } from 'react';


export const triggerCtx = createContext();

function App() {

  const [projectButton, setProjectButton] = useState(false);

  return (
    // <triggerCtx.Provider value={[projectButton, setProjectButton]}>
      <AppLayout>
        
        <Board />

        {/* <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/forgotpassword" element={ <ForgotPassword /> } />
          <Route path="/confirmation" element={ <Confirmation /> } />
          <Route path="/changepassword/:id" element={ 
            <ProtectedRoutePasswordChange>
              <ChangePassword />
            </ProtectedRoutePasswordChange>
          } />
          <Route path="/createproject" element={ <CreateProject /> }/>
          <Route path="/projects/:id" element={ 
            <ProtectedRouteBoard>
                <Board />
            </ProtectedRouteBoard> 
          }/>
          <Route path="*" element={ <PageNotFound /> } />
        </Routes> */}
        
      </AppLayout>
    // </triggerCtx.Provider>
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
