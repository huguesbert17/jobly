import React, {FC} from "react";


const Landing: FC = () => {


    return <div className="d-flex flex-column justify-content-center align-items-center" style={{height: "100vh"}}>
        <p>All the jobs in one, convenient place</p>
        <div className="btn-group">
            <a href="/login" className="btn btn-primary">Login</a>
            <a href="/signup" className="btn btn-dark">Sign up</a>
        </div>
    </div>

}
export default Landing