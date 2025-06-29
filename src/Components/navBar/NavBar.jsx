

import userImg from '../../assets/userImg.png'; 

const NavBar = () => {
    return (
        <div className=" w-screen h-17 flex">
            <div className="flex gap-2"> {/* hamburger + ytLogo */}
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu">
                    <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                </svg>
                <img className="w-24 h-5 bg-white border-2 "
                    src="../../../public/youtube-logo.png" alt="youtube" />
            </div>
            <div className="flex"> {/* Search Box */}
                <input type="text" className="w-40 mx-4 h-10 border-black border-2" />
                
            </div>
            <div> {/* user icon */}
                <img className='w-10' src={userImg} alt="userIcon" width={50} />
            </div>

        </div>
    )
}
export default NavBar;
