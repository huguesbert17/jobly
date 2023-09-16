import React, {FC, useContext, useEffect, useRef} from "react";
import Logo from "../logo.svg"
import useAccount from "../hooks/useAccount";
import { useNavigate } from "react-router-dom";
import AppContext from "../store/AppContext";

const Login: FC = () => {
    const {login} = useAccount(),
          userNameRef = useRef<any>(),
          passwordRef = useRef<any>(),
          {user} = useContext(AppContext),
          navigate = useNavigate()


    
    useEffect(() => {
        if(user?.isLogged) navigate("/")
    }, [user?.isLogged])


    const handleLogin = (e: any) => {
        e.preventDefault()
        login(userNameRef.current.value, passwordRef.current.value)
    }

    return <div className="col-11 col-md-4 col-sm-6 mx-auto pt-4 align-items-center">
        <form className="form-signin" onSubmit={handleLogin}>
        
            <div className="text-center">
                <img className="mb-4" src={Logo} alt="" width={120}/>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            </div>

            <div className="form-group mt-2">
                <label htmlFor="username" className="sr-only text-start">Username</label>
                <input type="text" id="username" ref={userNameRef} className="form-control" placeholder="Username" required={true}/>
            </div>

            <div className="form-group mt-2">
                <label htmlFor="inputPassword" className="sr-only text-start">Password</label>
                <input type="password" ref={passwordRef} id="inputPassword" className="form-control" placeholder="Password" required={true}/>
            </div>
            <div className="mt-3 text-center">
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </div>
        </form>
    </div>
}
export default Login