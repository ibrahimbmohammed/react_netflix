import React, { useRef } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import ListItem from '../listItem'

function Index() {
    const listRef = useRef()

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 150;
        if (direction === "left") {
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        } else if (direction === "right") {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    return (
        <div className="flex flex-col w-screen bg-black flex-grow-0 ">
            <h3 className="text-gray-150 text-2xl my-4"> Continue to Watch</h3>
            <div className="com flex flex-grow-0 relative ">
                <span className="backarr w-20 h-32 cursor-pointer z-30">
                    <MdArrowBackIosNew className="text-white text-6xl z-30 absolute left-0 inset-y-8 " onClick={() => { handleClick("left") }} />
                </span>
                <div className="you overflow-hidden">
                    <div ref={listRef} className="flex flex-grow-0 ml-2 translate-x-0 transition-all delay-300 ease-in ">
                        <ListItem index={0} />
                        <ListItem index={1} />
                        <ListItem index={2} />
                        <ListItem index={3} />
                        <ListItem index={4} />
                        <ListItem index={5} />
                        <ListItem index={6} />
                        <ListItem index={7} />
                        <ListItem index={8} />
                        <ListItem index={9} />
                        <ListItem index={10} />
                    </div>
                </div>

                <span className="backarr w-20 h-32 cursor-pointer z-30">
                    <MdArrowForwardIos className="text-white text-6xl z-30 absolute right-0 inset-y-8 " onClick={() => { handleClick("right") }} />
                </span>
            </div>



        </div>
    )
}

export default Index
