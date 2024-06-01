
import { Button, message, type GetProp, type UploadProps } from 'antd';
import { useContext, useState } from 'react';
import useFileResizer from '../../hook/useImageResize';
import axios from 'axios';
import TextArea from 'antd/es/input/TextArea';
import { CloseCircleOutlined, CloudUploadOutlined, 
  DeleteOutlined, EyeOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Modals } from '../Modals';
import { useMutation, useQueryClient } from 'react-query';
import { createUploadFeed } from '../../api/feed';
import { OpenModalContext } from './createContent';


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const ImageUpload = () => {
  const {dispatch} = useContext(OpenModalContext)
  const [selectedFile, setSelectedFile] = useState<File[] | []>([]);
  const [content ,setContent] = useState('')
  const [previewImage ,setPreviewImage] = useState<File[] | []>([])
  const [previewUrl ,setPreviewUrl] = useState('')
  const [previewTitle , setPreviewTitle] = useState('')
  const [previewOpen, setPreviewOpen] = useState(false);
  const { resizeFile, resizedFile } = useFileResizer(800, 600);
  const username = localStorage.getItem('username')
  const handleCancelPreview = () => setPreviewOpen(false);
  const [messageApi, contextHolder ] = message.useMessage()
  const queryClient = useQueryClient()


  const {mutate , isLoading} = useMutation(createUploadFeed,{
    onSuccess : (data:any) => {
        if(data.success){
          messageApi.success(data.message)
          dispatch({type : "SHOW_MODAL&&HIDEMODAL", payload:false})
          setTimeout(()=>{
            queryClient.invalidateQueries('home')
          },1000)
          
        }else{
          messageApi.error(data.message)
        }
    },
    onError: () => {
        messageApi.error(`there was an error operation`)
    }
  })

const handleCancel = () => {
    dispatch({type : "SHOW_MODAL&&HIDEMODAL", payload:false})
}

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
    await resizeFile(file)
        .then((resized:any) => {
          // Do something with the resized file
  
          setSelectedFile((prevFile)=>[...selectedFile,resized.file])
          setPreviewImage((prevPreview) => [...previewImage , resized])
        })
        .catch((error) => {
          console.error('Error resizing file:', error);
        });

      
    }
  };
  const handleRemove = (index:number) =>{
    const newFiles = [...selectedFile]
    newFiles.splice(index , 1)
    setSelectedFile(newFiles)
     const newPreview = [...previewImage]
     newPreview.splice(index, 1)
     setPreviewImage(newPreview)
   
  }

  const handlePreview = async (url:any) => {
    setPreviewUrl(url.preview)
    setPreviewTitle(url.file.name)
    setPreviewOpen(true)
  }

  
  const handleUpload = async () => {
    const formData = new FormData()
    const withLineBreaks  = await content.replace(/\n/g, '<br>')
    const withLineParagrahs = `<p>${withLineBreaks}</>`
    formData.append('username', username as string)
    formData.append('content', withLineParagrahs)
    selectedFile.forEach((file)=>{
      formData.append('images', file)
    })
   mutate(formData)
   
  }

 

  return (
    <div>
       {contextHolder}
      <TextArea
      onChange={(event)=>setContent(event.target.value)}
      rows={4}
      className='bg-neutral-50'
      placeholder='write someting here'
      ></TextArea>
      <div className='my-2 overflow-y-auto h-[13rem]'>
      <div className="flex 
      max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
        <div className="relative w-full">
        {selectedFile.length >= 1 ? null :
        
      <label 
          className="flex flex-col items-center justify-center  px-4 
      transition w-full h-48 gap-3  bg-white border-[1px] border-gray-300
       border-dashed rounded-lg appearance-none 
       cursor-pointer hover:border-gray-400 
       focus:outline-none" id="drop">
       <input draggable type="file" name="file_upload" className="hidden"
        accept="image/*" onChange={handleFileChange} id="input">
        </input>
        <PlusCircleOutlined className='text-[2rem] text-neutral-300'/>
        <span className='inline-block'>
          <p className='text-neutral-400'>upload images only</p>
        </span>
        </label> }
    <div className="gap-3 
    rounded-md overflow-y-auto
     mx-auto">

      <span>
      {previewImage && previewImage.map((item:any,key)=><div key={key} className=''>
      <img className=' 
      w-full h-52 object-contain bg-black border-neutral-200  aspect-auto border-[1px]
       rounded-[4px] ' src={item.preview} alt="Resized" />
     <div className='flex gap-2 justify-center relative -top-[12rem]
      float-right px-3  text-white'>
      {
        selectedFile.length >= 5 ? null :
    <label className='bg-white text-zinc-600 px-2 rounded-lg'>
        <PlusCircleOutlined/>
        <input type="file" name="file_upload" className="hidden"
        accept="image/*" onChange={handleFileChange} id="input">
        </input>
        </label>
      }
      <button 
      className='bg-white px-2 rounded-lg text-zinc-700'
       onClick={()=> handlePreview(item)}>
        <EyeOutlined/>
      </button>
      <button
      className='bg-white px-2 rounded-md text-rose-500' 
      onClick={()=>handleRemove(key as number)}>
        <DeleteOutlined/>
      </button>
      <label className='bg-white text-zinc-600 px-2 rounded-lg'>
        <p>{1}/ {selectedFile.length}</p>
        </label>
      </div>
      </div>
      )}
      </span>
    </div>
  </div>
</div>
<Modals 
title={previewTitle} 
icon={<EyeOutlined className="text-white"/>}
isModalOpen={previewOpen} 
footerBtn={false}
 handleCancel={handleCancelPreview}>
        <img alt="example" className='rounded-[4px]
         border-[1px] border-neutral-300'
         style={{ width: '100%', height:'40%' } } 
         src={previewUrl} />
      </Modals>
      </div>
      <div className='flex justify-end gap-3'>
      <Button 
      className="text-sm inline-flex 
      items-center
      border-none
      active:bg-neutral-300 
      rounded-lg px-2 py-1
       dark:bg-zinc-700
       dark:text-neutral-100
       bg-neutral-100"
      icon={<CloseCircleOutlined/>}
      onClick={handleCancel}>
        Cancel
      </Button>
      <Button  
       className="text-sm inline-flex 
                border-none
                text-white
                active:bg-neutral-300
                 items-center  rounded-lg
                 py-1 px-2 bg-[#7469B6]
                 dark:bg-zinc-700 dark:text-neutral-100
                 " 
                 icon={<CloudUploadOutlined/>} 
                 loading={isLoading}
                 onClick={handleUpload}>
        Upload
      </Button>
      </div>
    </div>
  );
};

export default ImageUpload;