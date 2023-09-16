import React, {FC, Fragment, useContext} from "react";
import AppContext from "../store/AppContext";
import useAccount from "../hooks/useAccount";

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
    <a className="navbar-brand" href="/">Jobly</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        {(user && user.isLogged) && <Fragment>

            <a className={`nav-item nav-link${["/companies"].includes(window.location.pathname) ? " active" : ""}`} href="/companies">Compagnies</a>
            <a className={`nav-item nav-link${["/jobs"].includes(window.location.pathname) ? " active" : ""}`} href="/jobs">Jobs</a>
            <a className={`nav-item nav-link${["/profile"].includes(window.location.pathname) ? " active" : ""}`} href="/profile">Profile</a>
            <a className={`nav-item nav-link`} href="" onClick={handleLogout}>Log out ({user.username})</a>
        </Fragment>}
        {(!user || !user.isLogged) && <Fragment>
            <a className="nav-item nav-link" href="/login">Login</a>
            <a className="nav-item nav-link" href="/signup">Sign up</a>
        </Fragment>}
      </div>
    </div>
  </nav>
}
export default Navbar