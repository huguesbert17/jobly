import {FC, Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import JoblyApi from "../api"
import Progress from "../utils/Progress";
import Logo from "../logo.svg"
import Jobs from "./Jobs";


interface IProps {

}

const CompanyPage: FC<IProps> = (props: IProps) => {

    const {company: which} = useParams(),
          [company, setCompany] = useState<any>([]),
          [isLoading, setIsLoading] = useState<boolean>(true)


    useEffect(() => {
        JoblyApi.getCompany(which).then((cp: any) => {
            setIsLoading(false)
            setCompany(cp)
        })
    }, [])

    if(isLoading) return <Progress style="skype"/>

    if(!company.length && !isLoading) return <h1>This company wass not found</h1>


    return <Fragment>
        <div className="col-11 col-md-5 col-sm-6 mx-auto pt-4 align-items-center">
            <div className="text-center">
                <img className="mb-4" src={company[0].logoUrl ? company[0].logoUrl.replace("png", "svg") : Logo} alt="" width={120}/>
                <h1 className="h3 mb-3 font-weight-normal">{company[0].name}</h1>
                <blockquote>
                    {company[0].description}
                </blockquote>
            </div>
        </div>
        <Fragment>
            <Jobs company={which}/>
        </Fragment>
    </Fragment>

}
export default CompanyPage