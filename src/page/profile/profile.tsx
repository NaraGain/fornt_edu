import React, { createContext, useEffect, useState } from "react";
import { message} from "antd";
import { useParams } from "react-router-dom";
import HeaderProfile from "./components/headerProfile";
import { userProfile } from "../../api/user";
import { RenderTab } from "./components/RenderTab";
import { UserInfo } from "./components/UserInfo"
import { LoaderPage } from "../../components/loader/loaderPage";

export const ProfileContext = createContext<any>(null)
const Profile:React.FC = () =>{
    const [data ,setData] = useState<any>('')
    const [loading ,setLoading] = useState(false)
    const[messageApi , contextHolder] = message.useMessage()
    const param = useParams()
    const username = param.username
    const tab = param.tab
    
    useEffect(()=>{
        const profileUser = async ()=>{
            try {
                setLoading(true)
                const response = await userProfile({
                    username: username as string
                })
                setLoading(false)
                if(response.success){
                    setData(response.result)  
                }else{
                   messageApi.error(response.message)
                }
            } catch (error:any) {
                messageApi.error(error)
            }
        }
        profileUser()

    },[])

    return <ProfileContext.Provider value={{data, loading}}>
        {
            loading ? <LoaderPage></LoaderPage> : null
        }
    <div className="relative 
    mx-auto 
    py-4
    h-screen
   dark:text-neutral-100
     text-neutral-700 container ">
        {contextHolder}
        <main className=" py-4  flex-1 
        flex-col ">
            <header className="
             max-w-3xl mx-auto 
             flex md:flex-col
             md:px-0  md:my-0 ">
           <UserInfo/>
            <HeaderProfile/>
            </header>
            <section className="max-w-3xl mx-auto">
        <div className="my-3">
           <RenderTab tabName={tab as string}/>
           </div>
            </section>       
            </main>
    </div>
</ProfileContext.Provider>


}


export default Profile