import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/Constants";


const VideoContainer  = ()=>{
    const getVideos = async()=>{
        const videoData = await fetch(YOUTUBE_VIDEOS_API);
        const json = await videoData.json();
        console.log(json)
    }
    useEffect(()=>{
        getVideos();
    },[])
    return (
        <div>
            VideoContainer
        </div>
    )
}

export default VideoContainer;