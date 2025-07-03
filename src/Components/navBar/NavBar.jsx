

import { useDispatch, useSelector, } from 'react-redux';
import userImg from '../../assets/userImg.png';
import { toggleMenu } from '../../utils/appSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../../utils/Constants'; 
import { cacheResults } from '../../utils/SearchResultSlice'; 


const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showSuggestions, setshowSuggestions] = useState(false);
    
    const cacheRes = useSelector(store => store.search);
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const getSearchSuggestions = async () => {
                const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
                const json = await data.json(); 
                setSearchResult(json[1]);
                dispatch(cacheResults(
                    {[searchQuery] : json[1]}
                ))
            }
            if(cacheRes[searchQuery]){ // searchquery is chached the return chacehedresult.
                setSearchResult(cacheRes[searchQuery]);
            } 
            else{ // make an api call
                getSearchSuggestions();
            }
            
        }, 200)
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery])

    return (
        <div className="p-4 shadow grid grid-flow-col">
            <div className="flex items-center h-8 col-span-2 gap-2 ml-2 " > {/* hamburger + ytLogo */}
                <div className="cursor-pointer ">
                    <svg onClick={toggleMenuHandler}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" class="lucide lucide-menu-icon lucide-menu ">
                        <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                    </svg>
                </div>
                <a href="/">
                    <img className="cursor-pointer h-6 mx-2 bg-white "
                        src="/youtube-logo.png" alt="youtube" />
                </a>
            </div>

            <div className=" h-9 col-span-8 "> {/* Search Box */}
                <div className='flex'>
                    <input type="text"
                        placeholder='Search'
                        className="w-[70%] focus:shadow-inner pl-4 py-2 outline-none border-1 border-gray-200 rounded-l-full border-r-0" 
                        onChange={(e) => { setSearchQuery(e.target.value) }}
                        value={searchQuery} 
                        onFocus={()=>setshowSuggestions(true)}
                        onBlur={()=>setTimeout(() => {
                            setshowSuggestions(false)
                        }, 100)}
                        />
                    <button className='w-15 border-1  border-gray-200 rounded-r-full hover:bg-gray-200 outline-none flex justify-center items-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor"  strokeLinecap="round"
                            strokeLinejoin="round" className="lucide lucide-search-icon lucide-search">
                            <path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" />
                        </svg>
                    </button>
                </div>      {/*SearchSuggestion */}
                    {(searchResult.length>0 && showSuggestions) && <div className="shadow-md mx-2 absolute z-10 py-3 p-2 bg-gray-50 w-[36rem] rounded">
                        { searchResult.map((s,index) =>{
                            return (
                                <ul className=' hover:bg-gray-100 font-semibold px-4 flex items-center rounded-xl'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 22"
                                        fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-search-icon lucide-search">
                                        <path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" />
                                    </svg>
                                    <li className=' px-4 py-3 text-md' key={index}> {s}  </li> 
                                    
                                </ul>
                            )
                        }
                    )}  
                </div>}
            </div>

            <div className='col-span-2 flex items-center justify-end'> {/* user icon */}
                <img className='w-8 h-8' src={userImg} alt="userIcon" width={50} />
            </div>

        </div>
    )
}
export default NavBar;
