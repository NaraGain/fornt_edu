import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";


const MainLayout:React.FC = ()=>{
    return <>
        <Navbar/>
        <Outlet/>
    </>
}

export default MainLayout;