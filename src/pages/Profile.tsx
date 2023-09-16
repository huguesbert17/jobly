import React, {FC, useContext, useEffect} from "react";
import Logo from "../logo.svg"
import AppContext from "../store/AppContext";
import useAccount from "../hooks/useAccount";
import { useNavigate } from "react-router-dom";

const Profile: FC = () => {
    const {update} = useAccount(),
        {user} = useContext(AppContext)


    const handleSubmit = (e: any) => {
        e.preventDefault()

        const formData: FormData = new FormData(e.currentTarget),
              form: any = {}

        for (let [key, value] of formData.entries()) {
          form[key] = value;
        }
        
        update(form)
    }
    

    return <div className="col-11 col-md-4 col-sm-6 mx-auto pt-4 align-items-center" style={{paddingTop: "40px", paddingBottom: "40px"}}>
        <form className="form-signin" onSubmit={handleSubmit}>
        
            <div className="text-center">
                <img className="mb-4" src={Logo} alt="" width={120}/>
                <h1 className="h3 mb-3 font-weight-normal">Your profile</h1>
                <h3>{user.firstName} {user.lastName}</h3>
            </div>


            <div className="form-group mt-2">
                <label htmlFor="firstName" className="sr-only text-start">First name</label>
                <input type="text" id="firstName" name="firstName" defaultValue={user.firstName} className="form-control" placeholder="First name" required={true}/>
            </div>


            <div className="form-group mt-2">
                <label htmlFor="lasstName" className="sr-only text-start">Last name</label>
                <input type="text" id="lasstName" name="lastName" defaultValue={user.lastName} className="form-control" placeholder="Last name" required={true}/>
            </div>



            <div className="form-group mt-2">
                <label htmlFor="email" className="sr-only text-start">Email</label>
                <input type="email" id="email" name="email" className="form-control" defaultValue={user.email} placeholder="Email address" required={true}/>
            </div>



            <div className="form-group mt-2">
                <label htmlFor="inputPassword" className="sr-only text-start">Confirm password to make changes</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password"/>
            </div>

            
            <div className="mt-3 text-center">
                <button className="btn btn-lg btn-primary btn-block" type="submit">Update account</button>
            </div>
        </form>
    </div>
}
export default Profile