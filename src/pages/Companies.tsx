import React, {FC, Fragment, useContext, useEffect, useRef, useState} from "react";
import JoblyApi from "../api"
import AppContext from "../store/AppContext";
import useAccount from "../hooks/useAccount";
import { Link } from "react-router-dom";
import Logo from "../logo.svg"


const Companies: FC = () => {
    const [companies, setCompanies] = useState<any>(),
            inputRef = useRef<any>(),
            {applyToJob} = useAccount(),
            {user} = useContext(AppContext)


    useEffect(() => {
        JoblyApi.getCompanies().then((comp: any) => setCompanies(comp))
    }, [])

    const handleSearch = (e: any) => {
        JoblyApi.getCompanies(e.target.value).then((s: any) => setCompanies(s))
    }

    const handleClickSearch = (e: any) => {
        if(inputRef.current.value === "") return
        JoblyApi.getCompanies(inputRef.current.value).then((s: any) => setCompanies(s))
    }

    if(!companies) return <></>
    return <div className="row flex-column" style={{gap: "1rem"}}>
        <div className="col-11 col-md-5 mx-auto mb-3 sticky-top p-0" style={{top: "5em"}}>
            <div className="input-group">
                <input type="text" onChange={handleSearch} ref={inputRef} className="form-control" placeholder="Search company" aria-label="Search company" aria-describedby="sercch"/>
                <div className="input-group-append">
                    <button onClick={handleClickSearch} className="btn btn-primary" id="search" style={{borderRadius: "0 0.375rem 0.375rem 0"}}>Search</button>
                </div>
            </div>
        </div>

        {companies.map((company: any, index: number) => {
            return <Link to={`/companies/${company.handle}`} className="col-11 col-md-5 mx-auto card" key={index} style={{textDecoration: "none"}}>
                <div className="d-flex justify-content-between card-header">
                    <h5 className="">{company.name}</h5>
                    <div style={{width: "50px"}}>
                        <img className="mb-0" src={company.logoUrl ? company.logoUrl.replace("png", "svg") : Logo} alt="" style={{maxWidth: "100%"}}/>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{company.description}</h5>
                    <p className="card-text">Employees: {company.numEmployees}</p>            
                </div>
        </Link>
        })}
    </div>
}
export default Companies