import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import LeftBar from "../page/main/components/leftBar";


const MainLayout:React.FC = ()=>{
    return <>
        <Navbar/>
        <div className="container top-[3.5rem] relative  mx-auto">
            <div className="flex md:flex-row flex-col  ">
            <div className="basis-[20%]">
                <div className="md:fixed ">
                <LeftBar/>
                </div>
                </div>
        <div className="basis-[80%]">
        <Outlet/>
        </div>
            </div>
        </div>
        
    </>
}

export default MainLayout;