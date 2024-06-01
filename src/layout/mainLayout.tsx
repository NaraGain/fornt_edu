import { Outlet } from "react-router-dom";
import LeftBar from "../page/home/components/leftBar";

const MainLayout:React.FC = ()=>{
       return <div className="flex md:flex-row flex-col relative ">
        <div className="dark:bg-zinc-800
          md:w-64 w-full
         bg-neutral-50/55
         md:dark:bg-zinc-700/20
         fixed 
         shadow-gray-400/20"> 
         <div className="w-full flex">
           <LeftBar/>

    </div>
    </div>
    <div className="flex-1 flex md:ml-[13rem] flex-col w-full">
            <Outlet/>
    </div>

        </div>
}

export default MainLayout;
