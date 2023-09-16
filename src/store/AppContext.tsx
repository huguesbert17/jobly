import React, {FC, ReactNode, useReducer, createContext, useEffect, useState} from "react";
import useAccount from "../hooks/useAccount";

export interface IUser {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    isLogged: boolean,
    myJobs: []
}

interface IState {
    user: IUser,
}

const initialState: any = {
    user: {
        myJobs: []
    },
}

const AppContext = createContext(initialState)

interface IProps {
    children: ReactNode
}

interface IAction {
    type: string,
    payload: any
}

const reducer = (state: IState, action: IAction) => {
    if(action.type === "CREATE_ACCOUNT") return {...state, user: action.payload}

    if(action.type === "SET_USER") return {...state, user: action.payload}

    if(action.type === "SET_JOB") {

        let _state: any = {...state}

        _state.user.myJobs = [..._state.user.myJobs, action.payload]

        return {..._state}
    }

    return state
}

export const AppContextProvider: FC<IProps> = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState),
        [ready, setReady] = useState<boolean>()

    useEffect(() => {
        let user: any = localStorage.getItem("user")
        if(user) {
            user = JSON.parse(user)
            if(user?.isLogged){
                dispatch({type: "SET_USER", payload: user})
            }
        }
        setReady(true)
    }, [])

    if(!ready) return <></>

    return <AppContext.Provider value={{...state, dispatch}}>
        {props.children}
    </AppContext.Provider>
}

export default AppContext