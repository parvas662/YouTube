

const ButtonList = ()=>{
    let btnList = ["All","Gamming","Music","Movies","Podcast","Recently Uploaded"]
    
    return ( 
        <div> 
            { 
                btnList.map((ele,index)=>{
                    return <button key = {index} className="m-3 cursor-pointer  text-black h-8 text-sm font-medium py-1 px-3 bg-gray-200 rounded-lg">
                        {ele}
                    </button>
                })
            }
        </div>
    )
}

export default ButtonList;