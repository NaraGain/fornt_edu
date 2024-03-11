import { useNavigate } from "react-router-dom"
import { Button } from "antd"
import React from "react"
import { ArrowLeftOutlined } from "@ant-design/icons"


const NavigatorButton:React.FC = () => {

    const navigate = useNavigate()

    return <Button className="mb-3 flex items-center  rounded-full shadow-sm dark:bg-zinc-900
     dark:text-white bg-neutral-50 border-none" type="default"
    onClick={()=> navigate(-1)}>
        <ArrowLeftOutlined/>
    </Button>
}


export default NavigatorButton