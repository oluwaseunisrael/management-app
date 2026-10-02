import React from "react";
import Profilepic from "../assets/img/2.png";

function Card() {
  return (
    
      
        <div className="grid grid-cols-2 mt-20 max-[740px]:mt-0 gap-30 items-center px-12 py-4 max-[740px]:grid-cols-1 max-[740px]:gap-4 max-[740px]:px-4 max-[740px]:py-8">
          <div className="width-[50%]">
            <h3>Available for work</h3>
            <h1 className="text-6xl font-bold max-[740px]:text-3xl ">
              Hi, I'm  Micheal, 
            </h1>
            <p className="text-xl my-4 max-[740px]:text-sm">A fullstack developer and Software engineer. I design and build digital products that people love to use — fast, clean, and accessible.</p>
             <div className="flex gap-4 items-center">
                <button className="bg-blue-800 text-white cursor-pointer px-8 py-2 rounded-sm hover:bg-blue-600 max-[740px]:px-4 ">View Work</button>
                <button className="border cursor-pointer border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100">Get in Touch</button>
             </div>
          </div>
          <div >
            <img src={Profilepic} alt="Profile" className="h-[500px] w-full object-cover rounded-lg max-[740px]:h-full" />
          </div>
        </div>
     
  
  );
}

export default Card;