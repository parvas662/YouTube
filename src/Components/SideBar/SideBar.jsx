
const SideBar = () => {
    return (
        <div className="w-48 p-5 shadow-xl">
            <ul>   
                <li>Home </li>
                <li>Shorts </li>
                <li>Subscription</li>
                
            </ul>
            <br />
            <h1 className="font-bold">Explore</h1>
            <ul>        
                <li>Trending </li>
                <li>shopping </li>
                <li>Music</li>
                <li>Live</li>
            </ul>
            
            <br />
            <h1 className="font-bold">Watch Later</h1>
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