 
const VideoCard = ({info})=>{ 
    const {snippet,statistics} = info;  
    const {localized ,channelTitle,thumbnails} = snippet

    return (
        <div className="m-2 hover:shadow-md  hover:bg-gray-100 rounded-xl  w-80 ">
            <img className=" rounded-3xl p-2" src={thumbnails.medium.url} alt="thumbnails" />
            
            <div >
                <ul className="px-4 py-1">
                    <li className="font-semibold text-wrap">{localized.title} </li>
                    <li className="text-gray-500">{channelTitle } </li>
                    <li className="text-gray-500 "> {statistics.viewCount} views </li>
                </ul>   
            </div>

        </div>
    )
}

export default VideoCard;