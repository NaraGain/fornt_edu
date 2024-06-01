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
      <div className="flex w-full gap-2 text-[14px] flex-col py-3">
         <button className="text-start" onClick={()=> setTheme('light')}>
          <div className="bg-purple-50 flex gap-2 hover:bg-blue-100 dark:bg-zinc-700 
          dark:text-neutral-100 rounded-lg  p-4">
            <SunOutlined className="text-blue-500 "/>
            <p className="dark:text-neutral-100">
            light
          </p>
          </div>
         </button>
         <button className="text-start" onClick={()=> setTheme('dark')}>
          <div className="bg-purple-50 flex gap-3 rounded-lg
            hover:bg-blue-100
           dark:bg-zinc-700
           dark:text-neutral-100
          p-4">
            <MoonOutlined 
            className="text-purple-500"/>
             <p className="dark:text-neutral-100">
            dark
          </p>
          </div>
         </button>
         <button className="text-start" onClick={()=>setTheme('system')}>
          <div className="bg-purple-50 rounded-lg
          hover:bg-blue-100
           dark:bg-zinc-700 
           dark:text-neutral-100
          p-4 flex items-center gap-3">
            <LaptopOutlined
             className="text-[#7469B6] "/>
              <p className="dark:text-neutral-100">
              system
              </p>
          </div>
         
         </button>
         </div>
    </Modals>


    </>
}




