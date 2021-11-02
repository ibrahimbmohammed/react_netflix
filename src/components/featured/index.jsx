import React from 'react';
import Bgimage from '../../assets/img/other.jpg';
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai'

const index = () => {
    return (
        <div  className="h-screen w-screen  ">
            <img className="my-width h-screen" src={Bgimage} alt="girl" />
            <div className=" absolute bottom-48 left-10  w-1/3 ">
                <div className="flex flex-col items-start justify-between">
                    <div className="first flex flex-col justify-between">
                 <h1 className="text-8xl text-yellow-300 font-extrabold">NEW CHILD</h1>
                   <h1 className="text-gray-150 font-bold text-3xl"> SEASON 1</h1>
                    </div>
                    <div className="second">
                        <p className="text-gray-150">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium ducimus autem sint fuga, voluptatum illum at quaerat atque voluptatem aliquid eaque ratione perspiciatis reiciendis. Adipisci fugiat laudantium minima suscipit repellat cumque temporibus nulla rem! Odio dignissimos praesentium atque accusantium expedita. Sit similique dolor, velit quo delectus quam omnis tempora.</p>
                    </div>
                    <div className="thrid space-x-3 mt-4">
                        <button className=" rounded-md px-6 pt-2 pb-2 text-black bg-gray-150"> 
                        <div className="flex items-center justify-between space-x-2">
                            <FaPlay className="text-black"/>
                            <p className="">Play</p>
                        </div>
                        </button>
                        <button className="rounded-md px-6 pt-2 pb-2  text-gray-150 bg-gray-500"> 
                        <div className="flex items-center justify-between space-x-2 ">
                        <AiOutlineInfoCircle className="text-white"/>
                            <p className="text-gray-150">Info</p>
                        </div>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default index
