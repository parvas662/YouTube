

import userImg from '../../assets/userImg.png'; 

const NavBar = () => {
    return (
        <div className="p-4 shadow-md grid grid-flow-col">

            <div className="flex items-center h-8 col-span-2 " > {/* hamburger + ytLogo */}
                <svg xmlns="http://www.w3.org/2000/svg" 
                className='pt-1 box-content'
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu">
                    <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                </svg>
                <img className=" h-6 mx-2 bg-white "
                    src="../../../public/youtube-logo.png" alt="youtube" />
            </div>

            <div className="flex h-9 col-span-8"> {/* Search Box */}
                <input type="text" 
                placeholder='Search '
                className="w-[80%] pl-4 outline-none border-2 border-gray-500 rounded-l-full border-r-0" />
                <button className='w-15 border-2  border-gray-600 rounded-r-full bg-gray-400 outline-none flex justify-center items-center'>
                    <svg  
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                        stroke-linejoin="round" class="lucide lucide-search-icon lucide-search">
                        <path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>
                    </svg>
                </button>
            </div>
            <div className='col-span-2 flex items-center justify-end'> {/* user icon */}
                <img className='w-8 h-8' src={userImg} alt="userIcon" width={50} />
            </div>

        </div>
    )
}
export default NavBar;
