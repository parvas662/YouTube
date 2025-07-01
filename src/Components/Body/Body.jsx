import { Outlet } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import SideBar from "../SideBar/SideBar";


const Body = () =>{
    return (
        <div className="flex gap-1 w-full h-screen">
            <SideBar/>
            <Outlet/> 
        </div>
    )
}
export default Body;