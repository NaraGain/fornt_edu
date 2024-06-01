import { useLocation, useNavigate} from "react-router-dom";



export const useQueryParams =() =>  {
    const location = useLocation()
    const navigate = useNavigate()

    const queryParams = new URLSearchParams(location.search)

    const getQueryParams = (name : string) : string | null => {
        return queryParams.get(name)
    }

    const setQueryParamsOneParams = (name:string ,value:string) => {
        queryParams.set(name,value)
        navigate(`?${queryParams.toString()}`, {replace : true})

    };

    const setQueryParamsTwoParams = (name:string , value:string , param2:string , value2:string)=>{
        queryParams.set(name,value)
       queryParams.set(param2 , value2)
       navigate(`?${queryParams.toString()}`)
    }

    const removeQueryParams = (name:string)=>{
        queryParams.delete(name)
        navigate(`${queryParams.toString()}`, {replace:true})
    }

    return {queryParams, getQueryParams , setQueryParamsOneParams, setQueryParamsTwoParams, removeQueryParams};
}