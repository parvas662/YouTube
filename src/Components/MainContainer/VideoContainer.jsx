import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/Constants";
import VideoCard from "./VideoContainer/videoCard";
import { Link } from "react-router-dom";


const VideoContainer  = ()=>{
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos = async()=>{
        const Data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await Data.json(); 
        setVideos(json.items);
    } 
    if (videos.length == 0){
        return null  // add shimmer effect.
    } 
    return (
        <div className="flex flex-wrap justify-center cursor-pointer">
            {videos.map((video)=>{
                return <Link to = {'/watch?v=' + video.id}>
                    <VideoCard key = {video.id} info ={video} />
                </Link>
            })} 
        </div>
    )
}

export default VideoContainer;