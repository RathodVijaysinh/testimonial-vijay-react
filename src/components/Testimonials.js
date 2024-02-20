import React from 'react'
import Card from "./Card"
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const Testimonials = (props) => {
   let reviews=props.reviews;
   const[index,setindex]=useState(0);
   

   function leftclickHandler(){
    if(index-1<0)
    setindex(reviews.length-1);
    else setindex(index-1);

   }

   function rightclickHandler(){
        if(index+1>=reviews.length)
        setindex(0);
        else setindex(index+1);     
   }

   function surpriseclickHandler(){
        let randomnumber=Math.floor(Math.random()*reviews.length);
        setindex(randomnumber);
   }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-100 hover:shadow-xl rounded-md'>
        <Card reviews={reviews[index]}/>
        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold '>
            <button onClick={leftclickHandler}  className='cursor-pointer hover:text-violet-500 '><FiChevronLeft/></button>
            <button onClick={rightclickHandler}  className='cursor-pointer hover:text-violet-500 '><FiChevronRight/></button>
        </div>

        <div className='mt-6'>
            <button onClick={surpriseclickHandler}
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
             cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'
            >Surprise Me</button>
        </div>

    </div>
  )
}

export default Testimonials