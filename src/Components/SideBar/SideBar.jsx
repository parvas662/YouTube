import { useSelector } from "react-redux";

const SideBar = () => {
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);

    return (
        isMenuOpen && <div className="w-56 flex-shrink-0 p-5 shadow-xl">
            <ul>   
                <li>Home </li>
                <li>Shorts </li>
                <li>Subscription</li>
                
            </ul>
            <br />
            <hr className="border-gray-300  "/>
            <h1 className=" pt-5 font-bold">Explore</h1>
            <ul>        
                <li>Trending </li>
                <li>shopping </li>
                <li>Music</li>
                <li>Live</li>
            </ul>
            
            <br />
            <hr  className="border-gray-300  "/>
            <h1 className=" pt-5 font-bold">Watch Later</h1>
            <ul>
                <li>Gaming</li>
                <li>News</li> 
                <li>Sports</li> 
                <li>Fashion & Beauty</li> 
            </ul>
            
        </div>
    )
}

export default SideBar 
