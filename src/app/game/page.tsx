"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { BackgroundBeams } from "@/components/background-beams";

export default function BackgroundGradientDemo() {
  return (
    <div className="mt-20 m-auto w-4/12">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 m-auto   ">
      <p className="text-base sm:text-2xl text-black mt-4 mb-2 dark:text-neutral-200">
         Round1
        </p>
        <Image
          src={`/jordans.webp`}
          alt="jordans"
          height="300"
          width="300"
          className="object-contain "
        />
        

        <p className=" text-neutral-600 text-2xl dark:text-neutral-400 mb-10">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <input className=" h-12 rounded-md flex items-center space-x-1  mt-4 text-2xl font-bold  justify-center" placeholder="Enter your Answer"/>

    

      </BackgroundGradient>
 
    </div>
    

  );
}
