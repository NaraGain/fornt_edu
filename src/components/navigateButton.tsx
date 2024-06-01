import { useNavigate } from "react-router-dom"

import React from "react"



interface navigateButton  {
    text? : string,
   icons?: JSX.Element
}

const NavigatorButton:React.FC<navigateButton> = ({text, icons}:navigateButton) => {

    const navigate = useNavigate()

    return <button 
    className="flex 
    items-center 
      shadow-none
       dark:bg-zinc-900
     dark:text-white  border-none" 
    onClick={()=> navigate(-1)}>
       {icons}
        {text}
    </button>
}


export default NavigatorButton