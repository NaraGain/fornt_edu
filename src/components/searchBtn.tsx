import { SearchOutlined } from "@ant-design/icons"



export const SearchBtn:React.FC = () =>{

    return <div className="flex">
       <input
        placeholder="search something"
        className="rounded-l-xl text-[14px]  py-1.5 px-4"/>
        <div className="bg-white flex justify-center items-center px-2 text-center rounded-r-xl">
        <SearchOutlined
     className="text-[1.3rem] text-blue-500"/>
        </div>

    </div>


}