import React,{useContext} from 'react';
import MysticImg from '../../assets/img/girl.jpg';
import {BsPlayFill, BsPlus} from 'react-icons/bs';
import {BiLike, BiDislike} from 'react-icons/bi';
import storeApi from '../../utils/storeApi';

const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4";
function Index ({index}) {
const {isHovered, setHovered, resetHovered} = useContext(storeApi);  
    return (
        <div 
        className="flex flex-col w-44 h-36 group mr-4  flex-shrink-0 bg-black"
         style={{left: isHovered && index * 225 - 50}}
         onMouseEnter={()=> setHovered}
         onMouseLeave={()=> resetHovered}
        >
            <img className="h-full w-full bg-cover group-hover:h-0 group-hover:w-0 "  src={MysticImg} alt="girl" />
            <div className="group-hover:absolute bottom-0  invisible flex flex-col group-hover:visible group-hover:h-95 group-hover:w-86 group-hover:mb-8 transition-all delay-100 ease-in bg-black z-10 my-shadow">
                <video className="w-full h-auto" src={videoUrl} autoPlay={true} loop={true} controls={true}  full={"true"}></video>
                <div className="icons flex justify-start items-center my-2 space-x-2 ml-2">
                 <BsPlayFill className="border-2 border-gray-150 rounded-full p-1 text-gray-150 text-3xl"/>
                 <BsPlus className="border-2 border-gray-150 rounded-full p-1 text-gray-150 text-3xl"/>
                 <BiLike className="border-2 border-gray-150 rounded-full p-1 text-gray-150 text-3xl"/>
                 <BiDislike className="border-2 border-gray-150 rounded-full p-1 text-gray-150 text-3xl"/>
                </div>
                <div className="timeinfo flex justify-start items-center text-sm text-gray-350 space-x-2 ml-2">
                    <time className="">1hr 34mins</time>
                    <h4 className="border border-gray-350 px-1.9">+18</h4>
                    <h3>2020</h3>
                </div>
                <div className="info text-gray-400 mt-1 ml-2">
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sit laboriosam rem aliquid inventore nobis!</p>
                 
                </div>
                <span className="text-gray-150 mt-4 mb-2 ml-2 text-sm">
                        Action
                    </span>
            </div>
            
        </div>
    )
}

export default Index


//