import React from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import ListItem from '../listItem'

const index = () => {
    return (
        <div className="flex flex-col w-screen bg-black ">
            <h3 className="text-gray-150 text-2xl"> Continue to Watch</h3>
            <div className="com flex flex-grow-0 relative">
                <span className="backarr bg-red-500 w-16 h-16 cursor-pointer z-30">
            <MdArrowBackIosNew className="text-white text-6xl z-30 absolute left-0 inset-y-8 " onClick={()=>{console.log("right")}} />
                </span>
            <div className="flex w-max ">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            
            </div>
            <span className="backarr bg-red-500 w-16 h-16 cursor-pointer z-30">
            <MdArrowForwardIos className="text-white text-6xl z-30 absolute right-0 inset-y-8 "  onClick={()=>{console.log("left")}} />
            </span>
            </div>
     


        </div>
    )
}

export default index
