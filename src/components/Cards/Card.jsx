import React from "react";
import Monitors from "../Monitors/Monitors";
import  icons6 from '../../assets/Monitor/info-card-2.png'
export default function Card() {
  return (
    <div className="lg:flex">
     <div class="lg:flex lg:flex-row">
  
    <div class="lg:basis-1/9">
      <Monitors></Monitors>
    </div>
    <div class="lg:basis-1/4">
      <div className="flex my-8 justify-center items-center ">
      <div className="relative">
  <div className="z-0">
    <img className="w-full h-auto" src={icons6} alt="" />
  </div>
  <div className="absolute top-0 left-0 p-4 text-white">
    <h6 className="text-text-base	 md:text-text-base lg:text-base	">Work with the rockets</h6>
    <span className="text-text-xs	 md:text-text-xs lg:text-xs">
      Wealth creation is an evolutionarily recent positive-sum game. It is all about who takes the opportunity first.
    </span>
    <button>Read More <i class="fa-solid fa-arrow-right"></i></button>
  </div>
 
</div>
      </div>
    </div>
  </div>
</div>
  );
}
