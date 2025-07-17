import React from "react";
import { Timeline } from "@/components/ui/timeline1";
import { homeDestinations1 } from "@/data/homeDestinations";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { cn } from "@/lib/utils";

export function TimelineDemo() {
  return (
    <div className="relative flex w-full items-center justify-center bg-gray-100  pt-5">
        {/* <div
            className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
            )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div> */}
        <div className="relative w-full overflow-clip">
            {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800  font-sans">
                Unmissable Places. 
            </h2> */}
            {homeDestinations1.map((item,index) => (
                <Timeline 
                    key ={index}
                    data ={[{
                        title: item.badge,
                        content: <AnimatedTestimonials destinations={item.destinations} />
                    }]}
                />        
            ))}
        </div>
    </div>
  );
}
