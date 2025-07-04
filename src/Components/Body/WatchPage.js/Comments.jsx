 
import { useState } from 'react';
import userImg from '../../../assets/userImg.png';


const Comments = ({info}) => { 
    const [showReplies,setShowReplies] = useState(true);
    return (
        <div className="mx-8 "> 
            <div className="flex gap-4   py-3">
             <img className='w-8 h-8' src={userImg} alt="userIcon" width={50} />
                <div className=''>
                    <p className="font-semibold text-md text-wrap pb-2" > @{info.author}</p>
                    <p className="text-sm font-medium text-wrap"> {info.description}</p>
                    <p onClick={()=> {setShowReplies(!showReplies)}} className='font-semibold pt-2 text-blue-300'>
                        Replies</p>
                    
                </div>
            </div>
            <div >
                {
                    showReplies &&  info.replies.map((reply)=>{
                        {console.log("info.replies",info.replies)}
                        return (
                            <div> 
                                <Comments info ={reply} /> 
                            </div>  
                        )
                    }) 
                }    
            </div>    
        </div>
    )
}


export default Comments;