import {  Modal,Tabs, Input, ConfigProvider } from "antd"
import { CameraOutlined, CloseCircleOutlined, 
    CloudUploadOutlined,
    MehOutlined, PlusCircleOutlined, 
    RocketOutlined } from "@ant-design/icons"
import { useState } from "react"
import type { TabsProps } from 'antd';
import ImageUpload from "./ImageUpload";
const {TextArea} = Input






export const CreateContent:React.FC = () => {
const [open ,setOpen] = useState(false)
const [previewOpen, setPreviewOpen] = useState(false);
const [previewImage, setPreviewImage] = useState('');
const [previewTitle, setPreviewTitle] = useState('');
const theme = localStorage.theme
const showModal =()=>{
 setOpen(true)
}

const handleOk = ()=>{

}

const handleCancel = ()=>{
setOpen(false)
}



const items:TabsProps['items'] = [
    {
        key: '1',
        label: <label className="inline-flex dark:text-neutral-100 gap-1">
            <MehOutlined/>
            <p>status</p>
            </label>,
        children: <TextArea className="bg-neutral-100
            font-nokora
         dark:bg-slate-600 dark:text-neutral-200
         text-neutral-500 border-none"
                             placeholder="write something here..." rows={5}/>,
      },
      {
        key: '2',
        label: <label className="inline-flex dark:text-neutral-100 gap-1">
        <CameraOutlined/>
        <p>photo</p>
        </label>,
        children: <div className="space-y-3">
            <TextArea className="bg-neutral-50
             dark:text-neutral-200 font-nokora
             dark:bg-slate-600 border-none rounded-md" 
            placeholder="wirte something" rows={2}/>
            <div className="bg-neutral-50 dark:bg-slate-600
             dark:text-neutral-100 border-[1px]
             border-dashed rounded-md p-4 border-neutral-300">
              <ImageUpload/>
            </div>
        </div>,
      },
]

    return <div className="md:inline-block" >
        <h1 className="hidden my-2 px-2
     text-[#1B82A1] md:inline-flex items-center rounded-md">what on your mind?</h1>
     <div>
      <button
        onClick={()=> showModal()}
            className="mb-2 border-none
               md:static fixed bottom-4 z-10 right-0
            hover:bg-neutral-100 rounded-md px-2 py-2
                inline-flex items-center gap-2
             shadow-none text-center 
             dark:text-neutral-300 text-[16px]">
                <div className="bg-blue-400 p-1 flex items-center
                 text-white text-[2rem] md:text-[16px] rounded-full md:rounded-md">
                <PlusCircleOutlined/>
                </div>
               <p className=" text-neutral-600
                hidden md:block
                dark:text-neutral-100">upload post</p></button>
                </div>
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
             className="font-nokora"
             open={open}
             title={<label className="dark:bg-zinc-800
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
                  dark:bg-zinc-700
                  dark:text-neutral-100
                  bg-neutral-100">
                    <CloseCircleOutlined/>
                    <p>cancel</p></button>
                <button className="text-sm inline-flex 
                active:bg-neutral-300
                 items-center gap-2 rounded-md 
                 py-1 px-2 bg-[#1B82A1]
                 dark:bg-zinc-700 dark:text-neutral-100
                 ">
                    <CloudUploadOutlined  className="text-white"/>
                    <p className="text-white">upload</p>
                   </button>
                </div>
             )}
             >
                <span className="my-3">
                <Tabs className="font-nokora" defaultActiveKey="1" items={items}></Tabs>
                </span>
               
             </Modal>
             </ConfigProvider>
    </div>
}