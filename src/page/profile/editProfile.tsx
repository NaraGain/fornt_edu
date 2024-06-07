import { createContext, useEffect, useState } from "react"
import { ArrowLeftOutlined} from "@ant-design/icons"
import { useLocation } from "react-router-dom"
import NavigatorButton from "../../components/navigateButton"
import { userProfile,changeProfile } from "../../api/user"
import { AddEditBio } from "./components/addEditBio"
import { EditInfo } from "./components/editInfo"
import { useMutation } from "react-query"
import { Avatar, message, Button} from "antd"
import useFileResizer from "../../hook/useImageResize"


export const EditInfoProvider:any = createContext(null)

export const EditProfile:React.FC = () => {
    const location = useLocation()
    const serachParams = new URLSearchParams(location.search)
    const name = serachParams.get('name')
  
    const [data ,setData] = useState<any | null>(null)
    const [file ,setFile] = useState<string |null>()
    const {resizeFile , resizedFile} = useFileResizer(300, 300)
    const [previewUrl ,setPreviewUrl] = useState('')
    const[messageApi , contextHolder] = message.useMessage()
    const [loading ,setLoading] = useState<boolean>(false)

    const {mutate , isLoading, isError} = useMutation(changeProfile , {
        onSuccess:(data:any) => {
            messageApi.success(data.message)
        },
        onError: (error:any)=>{
            messageApi.error(error)
        }
    })

    const handleFileChange = async (event:React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if(file){
            await resizeFile(file).then((resize:any)=> {
                setFile(resize.file)
                setPreviewUrl(resize.preview)
            }).catch((error:any)=>{
                messageApi.error(`error resizing file ${error}`)
            })
        }
    }

    const handleRemove = () => {
        setLoading(true)
        setTimeout(()=> {
            setFile("")
            setPreviewUrl("")
            setLoading(false)
        }, 2000)
       }

    const handleFormSubmit = async (event:React.ChangeEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const formData = new FormData()
        formData.append('profile', file as string)
        formData.append('userInfo', data?.userInfoInstance.infoid)
        formData.append('url' , data?.userInfoInstance.profile_url)
        formData.append('userid' , data?.userid)  
        mutate(formData)
        

    }
    

    useEffect(()=>{
        const getuser = async () => {
            try {
                const response = await userProfile({
                    username : name
                })
                messageApi.open({
                    key : 'getUser',
                    type : "loading",
                    content : "loading content...",
                    duration: 0
                })
                if(response.success){
                        setData(response.result)   
                        messageApi.destroy('getUser')   
                }else{
                  messageApi.error(response?.message)
                }
            } catch (error:any) {
                messageApi.error(`unkown ${error}`)
                messageApi.destroy('getUser')
            }
        }
        
         getuser()
    },[])

    
   
    return  <EditInfoProvider.Provider value={data}>
        {contextHolder}
        {isError ? <h1>error</h1> : <></>}
    <div className=" px-4 py-3 md:ml-14 max-w-3xl 2xl:max-5xl overflow-hidden ">
        <span className="mb-4 cursor-pointer flex gap-2 items-center">
    <NavigatorButton text="Profile" icons={<ArrowLeftOutlined/>}/>
    </span>
<div className="">  
<div className="text-neutral-700
 bg-neutral-50 
 dark:bg-zinc-700
 gap-3
 rounded-xl flex flex-col
md:flex-row md:justify-between 
md:items-center px-5 py-4">
    <div className="inline-flex gap-2 items-center">
    <Avatar size={80} src={previewUrl ? previewUrl : data?.userInfoInstance?.
                        profile_url}></Avatar>   
    <div>
    <h1 className="font-medium dark:text-neutral-100">{data?.firstname} {data?.lastname}</h1>
    <p className="text-neutral-300">@{data?.username}</p>
        </div> 
   
    </div>
    <form 
            className="my-2 inline-flex text-[14px]  justify-center"
            onSubmit={handleFormSubmit}>
                {
                 file ? <> <Button 
                 loading={isLoading}
                 className="
                 border-purple-500
                 text-[14px]
                 rounded-lg
                 cursor-pointer
                 dark:text-neutral-100
                  hover:underline text-cyan-700"
                 htmlType="submit">
                  Submit 
                 </Button>
                 <Button 
                 type="primary" 
                 danger
                 loading={loading}
                 className="mx-2
                 text-[14px]
                 rounded-lg
                 cursor-pointer
                  hover:underline text-red-700"
                  onClick={handleRemove}>
                    Remove
                 </Button>
                 </>
                  :
                 <Button className="text-[14px]
                 cursor-pointer
                 border flex items-center
                 p-2 bg-white dark:bg-zinc-800
                  dark:text-white border-zinc-700 rounded-lg   
                 text-cyan-700">
                <label>
                    change Profile
                <input hidden 
                 accept="image/*"
                type="file"
                 onChange={handleFileChange} />
                    </label>
            </Button>
}                 
            </form>
</div> 

<h1 className="py-4 font-medium">User Info</h1>
 <EditInfo/>
      <AddEditBio/>
    </div>
    </div>

    </EditInfoProvider.Provider>
}