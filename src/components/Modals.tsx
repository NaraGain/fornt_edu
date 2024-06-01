import { Modal,Button, ConfigProvider } from "antd"
import { useState } from "react"
import { CloudUploadOutlined, CloseCircleOutlined } from "@ant-design/icons"
interface modalProps {
    handleCancel : () => void,
    handleUplaod? : () => void,
    children: JSX.Element,
    isModalOpen : boolean,
    icon? : JSX.Element,
    iconBg? : string,
    title? : string,
    width? : number | 416
    footerBtn? : boolean,

}

export const Modals:React.FC<modalProps> =
 ({handleCancel ,handleUplaod,footerBtn, children ,iconBg, title, width,icon, isModalOpen}:modalProps) => {
    const [isModalOpens , setIsModalOpen] = useState<boolean>(isModalOpen)
    const theme = localStorage.theme


    return (
      <ConfigProvider
      theme={{
        components:{
          Modal: {
            contentBg : theme === "dark" ? "#27272a" : "#ffffff",
            headerBg : theme === "dark" ? "#27272a" : "#ffffff",
            colorIcon : theme == "dark" ? "#ffffff" : "#27272a",
            borderRadiusLG : 6,
            
          }
        }
      }}
      >
        <Modal 
        width={width}
        footer={false}
        title={<span className="dark:bg-zinc-800
        text-neutral-700 font-nokora dark:text-neutral-100
        inline-flex items-center gap-2">
         <div className={`${iconBg ? iconBg
           : "bg-[#7469B6]"} p-1 flex items-center rounded-md`}>
         {icon}
    </div>
  <p className=" text-[15px]">{title}</p>
</span>}
        onCancel={handleCancel}
         open={isModalOpen}>
          <>
          {children}
          </>
          
{
 footerBtn ? <div className="flex justify-end gap-3">
            <Button 
        className='
        flex items-center
        border-none
        font-nokora
         active:bg-neutral-300 
            rounded-md py-1
                  dark:bg-zinc-700
                  dark:text-neutral-100
                  bg-neutral-100'
        onClick={handleCancel}>
          <CloseCircleOutlined/>
          cancel
        </Button>
     <Button
    onClick={handleUplaod}
     className='flex items-center
     bg-[#1B82A1]
     font-nokora
     border-none
     text-white
     dark:bg-zinc-700 dark:text-neutral-100'>
      <CloudUploadOutlined/>
      upload
     </Button>
     </div> : null}
        </Modal>
        </ConfigProvider>
    )
}