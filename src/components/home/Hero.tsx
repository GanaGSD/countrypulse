"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import Link from "next/link"

export default function Hero() {
  const images = [
    "/hero1.jpeg",
    "/hero2.jpeg",
    "/hero3.jpg",
    "/hero4.jpg"
  ];
  return (
    <ImagesSlider className="h-[35rem] md:h-[40rem] lg:h-[50rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Where Nomads <br /> Meet Modernity
        </motion.p>
          <button 
          className="px-6 py-2 backdrop-blur-sm border bg-black-300/10 border-gray-500/20 text-white text mx-auto text-center rounded-full relative mt-4">
          <Link 
            href="/destinations">
              <span>Explore Destinations</span>
          </Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-gray-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
