import { MoonOutlined, SettingOutlined, SunOutlined, LaptopOutlined } from "@ant-design/icons"
import { useContext, useEffect, useState } from "react"
import { Modals } from "./Modals"
import { OpenModalSettinProvider } from "./Setting"

export const ThemeSetting = () =>{
const [theme , setTheme] = useState(localStorage.theme)
const [isModalOpen, setIsModalOpen] = useState(false);
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
const element = window.document.documentElement;
const {state, dispatch} = useContext(OpenModalSettinProvider)


  const handleCancel = () => {
    dispatch({type : "SHOW_MODAL&&HIDEMODAL", payload:false})
  }

  const onWindowMatch = () =>{
    if(localStorage.theme === 'dark' || 
    (!("theme" in localStorage) && darkQuery.matches)){
        element.classList.add('dark');
    }else{
        element.classList.remove("dark")
    }
}

  useEffect(()=>{
    switch(theme){
        case "dark":
            localStorage.setItem("theme", "dark")
            element.classList.add("dark")
           
            break;
        case "light":
            localStorage.setItem("theme", "light")
            element.classList.remove("dark")
           
            break;
        default:
            localStorage.removeItem("theme")
            onWindowMatch()
            break
    }

}, [theme])
    return <>
    <Modals
      footerBtn={false}
      icon={<SettingOutlined className="text-white"/>}
     title={'Display setting'}
    isModalOpen={state.isModalOpen}
    handleCancel={handleCancel}>
      <div className="grid font-nokora grid-cols-3 gap-3 p-3">
         <button onClick={()=> setTheme('light')}>
          <div className="bg-purple-50 hover:bg-blue-100 dark:bg-zinc-700 
          dark:text-neutral-100 rounded-md my-2 p-4">
            <SunOutlined className="text-blue-500 text-[4rem]"/>
          </div>
          <p className="dark:text-neutral-100">
            light
          </p>
         </button>
         <button onClick={()=> setTheme('dark')}>
          <div className="bg-purple-50 rounded-md
            hover:bg-blue-100
           dark:bg-zinc-700 my-2
           dark:text-neutral-100
          p-4">
            <MoonOutlined 
            className="text-purple-500 text-[4rem]"/>
          </div>
          <p className="dark:text-neutral-100">
            dark
          </p>
         </button>
         <button onClick={()=>setTheme('system')}>
          <div className="bg-purple-50 my-4 rounded-md
          hover:bg-blue-100
           dark:bg-zinc-700 
           dark:text-neutral-100
          p-4">
            <LaptopOutlined
             className="text-[#7469B6] text-[4rem]"/>
          </div>
          <p className="dark:text-neutral-100">
            system
          </p>
         </button>
         </div>
    </Modals>


    </>
}




