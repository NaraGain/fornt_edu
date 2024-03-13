import { useNavigate } from "react-router-dom"
import { Button } from "antd"
import React from "react"
import { ArrowLeftOutlined } from "@ant-design/icons"


interface navigateButton  {
    text : string,
}

const NavigatorButton:React.FC<navigateButton> = ({text}:navigateButton) => {

    const navigate = useNavigate()

    return <Button 
    className="mb-3 flex 
    items-center 
     rounded-full
      shadow-sm
       dark:bg-zinc-900
     dark:text-white bg-neutral-100 border-none" type="default"
    onClick={()=> navigate(-1)}>
        <ArrowLeftOutlined/>
        {text}
    </Button>
}


export default NavigatorButton