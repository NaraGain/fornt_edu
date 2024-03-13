import React from "react"
import { BellOutlined } from "@ant-design/icons"
import { Badge, Dropdown, Space } from "antd"
import { Link } from "react-router-dom"




export const Notification:React.FC = () => {
        return <button className="active:bg-blue-400 bg-blue-300 rounded-md">
                 <Badge size="small" count={10}>
                  <div className="

                  text-white
                   p-2 rounded-md">
                    <Link to={"/notification"}>
                    <BellOutlined/>
                    </Link>
                  </div>
                </Badge>
        </button>
}