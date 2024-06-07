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
    items-center gap-2
      shadow-none
     dark:text-white  border-none" 
    onClick={()=> navigate(-1)}>
       {icons}
      <p>{text}</p>
    </button>
}


export default NavigatorButton