import { CloseOutlined } from "@ant-design/icons";
import React from "react"


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title? : string,
  children: React.ReactNode;
  isCloseButton?: boolean,
  contentBg? : boolean,
  footer? : boolean,
  okText? :string,
}

export const Modal:React.FC<ModalProps> = 
({ isOpen, onClose, title, children, contentBg, isCloseButton=true, okText="submint", footer=true }) => {

  if (!isOpen) return null;

        return <div className=" overflow-y-auto overflow-x-hidden
         fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">   
      <div className="fixed inset-0 top-0 z-50 flex
       justify-center items-center bg-neutral-500 bg-opacity-10">
      <div className={contentBg ? 'max-w-auto' : "bg-white rounded-lg shadow-lg max-w-lg"}>
        <div className={`flex px-4 py-2 ${title ? 'justify-between' 
        : 'justify-end'} items-center`}>
          {title ?
          <h2 className="text-xl font-semibold">{title}</h2>
          : <></>
          }
          {
            isCloseButton ?
            <button onClick={onClose} className="text-gray-600
           hover:text-gray-900">
            <CloseOutlined/>
          </button> : <></>
          }
        </div>
        <div className="">
          {children}
        </div>
       {
        footer ?
        <div className="flex gap-2 px-5 pb-4 pt-2 justify-end">
          <button onClick={onClose} className="px-2 py-1 bg-neutral-100
           text-neutral-700
           text-[14px]
           rounded-lg hover:bg-blue-600">
            cancel
          </button>
          <button onClick={onClose} className="px-2 py-1
          text-[14px]  bg-blue-500
           text-white rounded-lg hover:bg-blue-600">
            {okText}
          </button>
          </div>
          : <></>
      }
      </div>
    </div>
        </div> 

}