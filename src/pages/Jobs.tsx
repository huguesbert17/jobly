import React, {FC, Fragment, useContext, useEffect, useRef, useState} from "react";
import JoblyApi from "../api"
import AppContext from "../store/AppContext";
import useAccount from "../hooks/useAccount";

interface IProps {
    company?: string
}

const Jobs: FC<IProps> = (props) => {
    const [jobs, setJobs] = useState<any>(),
            inputRef = useRef<any>(),
            {applyToJob} = useAccount(),
            {user} = useContext(AppContext)

    const fetchJobs = () => {
        if(!props.company) JoblyApi.getJobs().then((allJobs: any) => setJobs(allJobs))
        if(props.company) JoblyApi.getCompanyJobs(props.company).then((allJobs: any) => setJobs(allJobs))
    }


    useEffect(() => {
       fetchJobs()
    }, [])

    const handleClearSearch = () => {
        inputRef.current.value = ""
        fetchJobs()
    }

    const handleApply = (e: number) => {
        applyToJob(e)
    }

    const handleSearch = (e: any) => {
        JoblyApi.getJobs(e.target.value).then((s: any) => setJobs(s))
        if(props.company) JoblyApi.getCompanyJobs(props.company, e.target.value).then((s: any) => setJobs(s))
    }

    const handleClickSearch = () => {
        if(inputRef.current.value === "") return
        JoblyApi.getJobs(inputRef.current.value).then((s: any) => setJobs(s))
        if(props.company) JoblyApi.getCompanyJobs(props.company, inputRef.current.value).then((s: any) => setJobs(s))
    }


    if(!jobs) return <></>
    return <div className="row flex-column" style={{gap: "1rem"}}>
        <div className="col-11 col-md-5 mx-auto mb-3 sticky-top p-0" style={{top: "5em"}}>
            <div className="input-group">
                <input onChange={handleSearch} type="text" ref={inputRef} className="form-control" placeholder="Search job" aria-label="Search job" aria-describedby="sercch"/>
                <div className="input-group-append">
                    <button onClick={handleClickSearch} className="btn btn-primary" id="search" style={{borderRadius: "0 0.375rem 0.375rem 0"}}>Search</button>
                </div>
            </div>
        </div>

        {(!jobs || !jobs.length && inputRef.current?.value) && <div className="text-center mt-3">
            <h1>No jobs for this search term</h1>
            <button className="btn btn-inverse-primary" onClick={handleClearSearch}>Clear search</button>
        </div>}

        {jobs.map((job: any, index: number) => {
            const applied: any = user.myJobs.filter((x: any) => x.toString() === job.id.toString())
            return <div className="col-11 col-md-5 mx-auto card" key={index}>
                <h5 className="card-header">{job.title}</h5>
                <div className="card-body">
                <h5 className="card-title">Company: {job.companyName}</h5>
                <p className="card-text">Salary: ${job.salary}</p>
                <p className="card-text">Equity: {job.equity ? job.equity : 0}</p>
                <div className="text-end">
                    <button className="btn btn-primary" disabled={applied.length} onClick={() => handleApply(job.id)}>{!applied.length ? "Apply to job" : "Applied"}</button>
                </div>
            </div>
        </div>
        })}
    </div>
}
export default Jobs