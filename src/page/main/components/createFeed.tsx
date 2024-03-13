import { Button, Modal,Tabs, Input, Upload, ConfigProvider } from "antd"
import { CloseOutlined, EditOutlined, FileImageOutlined, PlusCircleOutlined, PlusOutlined, RocketOutlined, ToTopOutlined } from "@ant-design/icons"
import { useState } from "react"
import type { TabsProps } from 'antd';
const {TextArea} = Input



const items:TabsProps['items'] = [
    {
        key: '1',
        label: <label className="inline-flex dark:text-neutral-100 gap-1">
            <EditOutlined/>
            <p>write</p>
            </label>,
        children: <TextArea className="bg-neutral-50
         dark:bg-slate-600 dark:text-neutral-200
         text-neutral-500 border-none"
                             placeholder="write something here..." rows={5}/>,
      },
      {
        key: '2',
        label: <label className="inline-flex dark:text-neutral-100 gap-1">
        <FileImageOutlined/>
        <p>image</p>
        </label>,
        children: <div className="space-y-3">
            <TextArea className="bg-neutral-50
             dark:text-neutral-200
             dark:bg-slate-600 border-none rounded-md" 
            placeholder="wirte something" rows={2}/>
            <div className="bg-neutral-50 dark:bg-slate-600 dark:text-neutral-100 border-[1px]
             border-dashed rounded-md p-4 border-neutral-300">
                <Upload>
                    upload
                </Upload>
            </div>
        </div>,
      },
]


export const CreateFeed:React.FC = () => {
const [open ,setOpen] = useState(false)
const theme = localStorage.theme
const showModal =()=>{
 setOpen(true)
}

const handleOk = ()=>{

}

const handleCancel = ()=>{
setOpen(false)
}

    return <>
      <button
        onClick={()=> showModal()}
            className="mb-2 border-none
            hover:bg-neutral-100 rounded-md px-2 py-2
                inline-flex items-center gap-2
             shadow-none text-center 
             dark:text-neutral-300 text-[16px]">
                <div className="bg-blue-400 p-1 flex items-center
                 text-white rounded-md">
                <PlusCircleOutlined/>
                </div>
               <p className=" text-neutral-600 dark:text-neutral-100">upload post</p></button>
             <ConfigProvider
             theme={{
             components:{
                Modal:{
                    contentBg : theme === "dark" ? "#27272a" : "#ffffff",
                    headerBg : theme === "dark" ? "#27272a" : "#ffffff",
                }
             }
             }}
             >
             <Modal
             open={open}
             title={<label className="dark:bg-slate-700
                      text-neutral-700 dark:text-neutral-100
                      inline-flex gap-2">
                <div className="bg-emerald-400 px-1 rounded-md">
                <RocketOutlined style={{color:'white'}}/>
                </div>
                <p className=" text-[15px]">create post</p>
             </label>}
             onCancel={handleCancel}
             footer={(_ ,{})=>(
                <div className="inline-flex gap-2">
                <button
                onClick={handleCancel}
                 className="text-sm inline-flex 
                 items-center gap-2
                 active:bg-neutral-300 
                 rounded-md px-2 py-1
                  dark:bg-slate-800
                  dark:text-neutral-100
                  bg-neutral-100">
                    <CloseOutlined/>
                    <p>cancel</p></button>
                <button className="text-sm inline-flex 
                active:bg-neutral-300
                 items-center gap-2 rounded-md 
                 py-1 px-2 bg-neutral-100
                 dark:bg-slate-800 dark:text-neutral-100
                 ">
                    <ToTopOutlined/>
                    <p>post</p>
                   </button>
                </div>
             )}
             >
                <span className="my-3">
                <Tabs defaultActiveKey="1" items={items}></Tabs>
                </span>
               
             </Modal>
             </ConfigProvider>
    </>
}