import React from 'react'
import { BsSearch } from 'react-icons/bs';
import {AiOutlineCaretDown} from 'react-icons/ai';
import netLogo from '../../assets/img/net2.png'

const index = () => {
    return (
        <nav className="flex  w-screen h-16 bg-transparent items-center justify-between px-8  fixed top-0">
            <div className="flex items-center justify-start w-1/2 space-x-10">
                <div className="flex justify-center items-baseline">
                <img className="w-36 h-16 "  src={netLogo} alt="logo" />
                </div>
                {/* end of logo */}
                <div className=" w-1/2 flex items-center justify-between ">
                <span className="mflex">
                <h3  className="font-normal text-gray-200">Homepage</h3>
                </span>
                <span className="mflex">
                <h3  className="font-normal text-gray-200">Series</h3>
                </span>
                <span className="mflex">
                <h3  className="font-normal text-gray-200">Movies</h3>
                </span>
                <span className="mflex">
                <h3  className="font-normal text-gray-200">New and Popular</h3>
                </span>
                <span className="mflex">
                <h3  className="font-normal text-gray-200">My List</h3>
                </span> 
                </div>
               
            </div>
            {/* end of first flex */}
            <div className="flex mr-8">
               
               {/* end of second div */}
               <div className="mflex space-x-4 text-4xl ">
               <div className="mflex">
                <BsSearch color="#d3d3d3" size="1rem"/>
               </div> 
               <span className="text">
                   <p className="font-thin text-sm text-gray-200">KID</p>
               </span>
                   <span className="">
                   <svg width="14" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0a6 6 0 0 0-6 6v3.586l-.707.707A1 1 0 0 0 1 12h12a1 1 0 0 0 .707-1.707L13 9.586V6a6 6 0 0 0-6-6Zm0 16a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3Z" fill="#5B6871"/></svg>
                   </span>
                   <span className="w-6 h-6 rounded-md bg-black" >
                       <img src="" alt="" />
                   </span>
                   <span className="cont  group flex flex-col flex-grow relative z-10 ">
                   <AiOutlineCaretDown className="w-4 h-4 text-gray-200 z-20" />
                   <div className="inner invisible group-hover:visible h-16 bg-black rounded-md group-hover:p-2 absolute transition-all delay-300 ease-in top-3 ">
                       <p className="text-white text-sm cursor-pointer pb-2">settings</p>
                       <p className="text-white text-sm cursor-pointer">logout</p>
                   </div>
                  </span>
                   
                   
               </div>
            </div>
        </nav>
    )
}

export default index
