import { useEffect } from "react";
import { useDispatch, } from "react-redux";
import { closeMenu } from "../../../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {

  // get the vidoe id using useSearchParams hook.
  const [SearchParam] = useSearchParams();
  const query = SearchParam.get("v")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div >
      <iframe className="px-8 py-4 rounded-2xl"
        width="1000"
        height="500"
        src= {`https://www.youtube.com/embed/${query}?autoplay=1&mute=0`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default WatchPage;