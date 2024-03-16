import { SearchOutlined } from "@ant-design/icons"



export const SearchBtn:React.FC = () =>{

    return <div className="flex">
       <input
        placeholder="search something"
        className="rounded-l-xl md:block hidden text-[14px] dark:bg-zinc-700  py-1.5 px-4"/>
        <div className="md:bg-white  flex 
        justify-center
         items-center
          md:px-2 p-1 
          dark:bg-slate-800
          text-center md:rounded-r-xl">
        <SearchOutlined
     className="text-[1.3rem] text-white md:text-blue-500"/>
        </div>

    </div>


}