import { useContext } from "react"
import AppContext, { IUser } from "../store/AppContext"
import JoblyApi from "../api"


const useAccount = () => {
    const {dispatch, user: userDetails} = useContext(AppContext)


    const currentUser = async() => {
        return await JoblyApi.getCurrentUser("none")
    }


    const logout = () => {
        const user = {...userDetails, isLogged: false}
        localStorage.setItem("user", JSON.stringify(user))
        dispatch({type: "SET_USER", payload: user})
    }

    const create = (data: IUser) => {

        JoblyApi.getCurrentUser().then((d: any) => {
            data = {...data, isLogged: true, ...d, myJobs: []}
            
            //Create the user in localStorage
            localStorage.setItem("user", JSON.stringify(data))

            dispatch({type: "CREATE_ACCOUNT", payload: data})
        })
    }

    const update = (data: any) => {
        const old: any = localStorage.getItem("user"),
            user: any = {...JSON.parse(old), ...data}

        localStorage.setItem("user", JSON.stringify(user))

        dispatch({type: "SET_USER", payload: user})
    }

    const login = (username: string, password: string) => {


        let user: any = localStorage.getItem("user")

        if(user) {
            user = JSON.parse(user)

            //Sorry no hash :-(
            if(username === user.username /*&& password === user.password*/) {
                user = {...user, isLogged: true}

                localStorage.setItem("user", JSON.stringify(user))

                dispatch({type: "SET_USER", payload: user})
            }else{
                alert("Username or password is incorrect.")
            }
        }else{
            alert("Please create account first.")
        }
    }

    const isLogged = () => {
        const user: any = localStorage.getItem("user")
        
        return (user && JSON.parse(user).isLogged)
    }

    const applyToJob = async(jobId: string|number) => {

        JoblyApi.getCurrentUser("none").then((user: any) => { //Not useful for me

            JoblyApi.applyToJob(user.username, jobId).then(() => { //Not useful for me either

                const data: any = {...userDetails, myJobs: [...userDetails.myJobs, jobId]}
                
                dispatch({type: "SET_JOB", payload: jobId})

                localStorage.setItem("user", JSON.stringify(data))
            })
        })
    }

    return {currentUser, create, isLogged, login, logout, applyToJob, update}
}
export default useAccount