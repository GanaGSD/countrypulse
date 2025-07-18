"use client"
import React from "react";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import { bentoItems } from "@/data/bentoItems";

const BentoGrid = ({
  children
} : {
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[200px] grid-cols-2 gap-2 px-2 md:px-1 sm:grid-cols-3 md:grid-cols-5 md:auto-rows-[250px]",
      )}
    >
      {children}
    </div>
  );
};

export function BentoImages() {
  return (
    <div className="mt-5 sm:mt-15 sm:mb-5 flex flex-col sm:gap-10 justify-center items-center">
      <div className="">
        <h2 className="w-full text-left sm:pl-4 text-3xl sm:text-5xl uppercase text-neutral-800  font-sans mb-5">
          Unmissable Places
        </h2> 
      </div>  
      <BentoGrid>
        {bentoItems.map((item, i) => (
          <div 
            key={i} 
            className={cn(
              "overflow-hidden", 
              item.className
            )}
          >
            <DirectionAwareHover 
              className="w-full h-full" 
              imageUrl={item.imageUrl}
              childrenClassName={item.className2}
            >
              {/* <p className="font-bold text-xl">{item.title}</p> */}
              <p className="font-normal text-2xl">{item.description}</p>
            </DirectionAwareHover>
          </div>
        ))}
      </BentoGrid>   
    </div>
  );
}



