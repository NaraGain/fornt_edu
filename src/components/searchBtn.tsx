import { CloseOutlined, SearchOutlined } from "@ant-design/icons"
import React, { useState, useEffect } from "react";



const Dropdown: React.FC = () => {
    return (
      <div className="absolute max-w-md w-full mt-2 text-[14px] 
       bg-white border border-gray-300 rounded shadow-md">
        <ul>
          <li className="py-2 px-4 
          cursor-pointer flex gap-1 items-center 
           hover:bg-gray-100">
          <CloseOutlined className="text-[12px]"/>
            <p>ption 1</p>
            </li>
          
          <li className="py-2 px-4 cursor-pointer
           hover:bg-gray-100">Option 2</li>
          <li className="py-2 px-4 cursor-pointer
           hover:bg-gray-100">Option 3</li>
        </ul>
      </div>
    );
  };
  

export const SearchBtn:React.FC = () =>{   
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


    return <form onSubmit={(event) => event.preventDefault()}
     className="w-full max-w-md flex">
    <input 
    type="text" placeholder="Search people"
        className="w-full py-1.5 text-[14px]
         px-4  bg-neutral-50
         rounded-l-full
         dark:bg-zinc-700
         dark:text-neutral-200
          focus:outline-none
           focus:border-blue-500"/>
           <button type="submit" className="bg-gray-100 
            flex items-center dark:text-neutral-100 text-neutral-500
             dark:bg-zinc-600
           rounded-r-full px-2">
           <SearchOutlined/>
           </button>
           
         
</form>


}