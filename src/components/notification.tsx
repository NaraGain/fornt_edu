import React from "react"
import { BellOutlined } from "@ant-design/icons"
import { Badge } from "antd"
export const Notification:React.FC = () => {
        return <>
        <Badge size="small" count={10}>
                  <div className="
                  bg-blue-300
                  text-white
                   p-2 rounded-md">
                  <BellOutlined/>
                  </div>
              
                </Badge>
        
        </>
}