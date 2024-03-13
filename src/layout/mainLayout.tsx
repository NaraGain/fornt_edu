import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import LeftBar from "../page/main/components/leftBar";


const MainLayout:React.FC = ()=>{
    return <>
        <Navbar/>
        <div className="max-w-4xl top-[3.5rem] relative  mx-auto">
            <div className="flex">
            <div className="basis-[20%]">
                <div className="fixed">
                <LeftBar/>
                </div>
                </div>
        <div className="basis-[80%] ">
        <Outlet/>
        </div>
            </div>
        </div>
        
    </>
}

export default MainLayout;