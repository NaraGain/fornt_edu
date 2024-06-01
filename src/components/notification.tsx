import React from "react"
import { BellOutlined } from "@ant-design/icons"
import { Badge, Dropdown, Space } from "antd"
import { Link } from "react-router-dom"




export const Notification:React.FC = () => {
        return  <Link to={"/notification"}> <div className="
                    dark:bg-zinc-600 
                  text-[14px] py-1 px-2 border
                   dark:text-white
                  border-neutral-200
                  bg-neutral-100
                  text-neutral-400
                   rounded-[7px]">
                    <BellOutlined/>
                  </div>
                  </Link>
}