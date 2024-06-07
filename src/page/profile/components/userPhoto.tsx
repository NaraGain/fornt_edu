import { Image } from "antd"
import { Link, useParams } from "react-router-dom"
import { userFile } from "../../../api/user"
import { useContext, useEffect, useState } from "react"
import { ProfileContext } from "../profile"


export const UserPhoto = () =>{

    const {username} = useParams()
    const [file ,setFile] = useState<[] | null | string[]>([])
    const  {data:user} = useContext(ProfileContext)
    const [message , setMessage] = useState('')
    const queryUserFile = async() => {
        try {
            const response = await userFile({
                userid : user?.userid
            })
            const fileFilter = response?.result?.
            filter((file:any) => file?.upload_url !== null)
            setFile(fileFilter)
            if(!response.sucess){
              setMessage(response.message)
            }
        } catch (error:any) {
            alert(error.response.data.message)
        }
    }

    useEffect(()=>{
        queryUserFile()
    },[user])

    return <div className="">
        {
          file?.length === 0 ? <div className=" 
          rounded-lg flex p-3 text-[18px] 
          tracking-wide text-neutral-500
          font-thin
           items-center justify-center ">
            <h1>{message}</h1>
           </div> :<ul className="grid grid-cols-2 md:grid-cols-3 gap-1">
             {file?.map((items:any,key:any)=> <li key={key}>
            {items?.upload_url ? <Link to={`/pv?post=${items?.postid}`}>
                <img key={key}
             className="h-auto border dark:border-zinc-700 max-w-full rounded-[5px]"
         src={`${items?.upload_url}`}/>
            </Link> : <></> }
            </li>)
                }
            </ul>
        }
        
    </div>
}