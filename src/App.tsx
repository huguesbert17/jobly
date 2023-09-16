import { Fragment, Suspense, lazy, useContext, useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import AppContext from './store/AppContext';
import { Routes, Route, } from 'react-router-dom';
import Progress from './utils/Progress';


const Landing = lazy(() => import('./pages/Landing')),
      Login = lazy(() => import('./pages/Login')),
      SignUp = lazy(() => import('./pages/SignUp')),
      Jobs = lazy(() => import('./pages/Jobs')),
      Companies = lazy(() => import('./pages/Companies')),
      CompanyPage = lazy(() => import('./pages/CompanyPage')),
      Profile = lazy(() => import('./pages/Profile'))



function App() {
  const {user} = useContext(AppContext)

  if(user?.isLogged && ["/login", "/signup"].includes(window.location.pathname)) window.location.replace("/")

  if(!user?.isLogged && ["/jobs", "/companies", "/profile"].includes(window.location.pathname)) window.location.replace("/login")

  return <Fragment>
    <Navbar/>
    <div className='container' style={{paddingTop: "40px", paddingBottom: "40px"}}>
      <Suspense fallback={<Progress style="skype"/>}>
        <Routes>
          {(!user?.isLogged) && <Route path='/' element={<Landing/>}/>}
            {(!user?.isLogged) && <Route path='login' element={<Login/>}/>}
            {(!user?.isLogged) && <Route path='signup' element={<SignUp/>}/>}

            <Route path='/' element={<Jobs/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/companies'>
              <Route path='' element={<Companies/>}/>
              <Route path=':company' element={<CompanyPage/>}/>
            </Route>
        </Routes>
      </Suspense>
    </div>
  </Fragment>;
}

export default App;
