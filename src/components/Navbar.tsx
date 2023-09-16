import React, {FC, Fragment, useContext} from "react";
import AppContext from "../store/AppContext";
import useAccount from "../hooks/useAccount";
import { Link } from "react-router-dom";

interface IProps {

}

const Navbar: FC<IProps> = (props: IProps) => {
    const {user} = useContext(AppContext),
          {logout} = useAccount()


    const handleLogout = (e: any) => {
        e.preventDefault();
        logout()
    }

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">
    <Link className="navbar-brand" to="/">Jobly</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        {(user && user.isLogged) && <Fragment>

            <Link className={`nav-item nav-link${["/companies"].includes(window.location.pathname) ? " active" : ""}`} to="/companies">Compagnies</Link>
            <Link className={`nav-item nav-link${["/jobs"].includes(window.location.pathname) ? " active" : ""}`} to="/jobs">Jobs</Link>
            <Link className={`nav-item nav-link${["/profile"].includes(window.location.pathname) ? " active" : ""}`} to="/profile">Profile</Link>
            <Link className={`nav-item nav-link`} to="" onClick={handleLogout}>Log out ({user.username})</Link>
        </Fragment>}
        {(!user || !user.isLogged) && <Fragment>
            <Link className="nav-item nav-link" to="/login">Login</Link>
            <Link className="nav-item nav-link" to="/signup">Sign up</Link>
        </Fragment>}
      </div>
    </div>
  </nav>
}
export default Navbar