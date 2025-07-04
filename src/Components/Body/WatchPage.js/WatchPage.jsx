/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, } from "react-redux";
import { closeMenu } from "../../../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import { commentData } from "../../../utils/Constants";

const WatchPage = () => {
  // show comments after 200ms delay. replicates as fetching from DB.
  const [showComments, setshowComments] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setshowComments(!showComments)
    }, 1000);
  }, [])

  
  // get the vidoe id using useSearchParams hook.
  const [SearchParam] = useSearchParams();
  const query = SearchParam.get("v")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div>
      <div >
        <iframe className="px-8 py-4 rounded-2xl"
          width="1000"
          height="500"
          src={`https://www.youtube.com/embed/${query}?autoplay=1&mute=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
      {showComments && <div className="w-[936px] bg-gray-50 ml-8">
        <h1 className="font-bold ml-8 text-2xl">{commentData.length} Comments :</h1>
        {
          commentData.map((e, index) => {
            return <Comments key={index} info={e} />
          })
        }
      </div>
      }
    </div>
  )
}

export default WatchPage;