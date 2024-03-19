"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}

      >
<div className="mt-10">
<div className=" border w-800 border-solid border-gray-300 rounded-lg overflow-hidden shadow-md h-full m- ">

<div className="leaderboard-header bg-purple-900 text-white text-center py-1 text-5xl font-space-age h- ">Leaderboard</div>

<div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300 ">
    <div className="player-name flex-1 text-4xl text-white">Player 1</div>
    <div className="player-score flex-none text-right text-3xl text-white">1000</div>
</div>

<div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
    <div className="player-name flex-1 text-4xl text-white">Player 1</div>
    <div className="player-score flex-none text-right text-3xl text-white">1000</div>
</div>

<div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
    <div className="player-name flex-1 text-4xl text-white">Player 1</div>
    <div className="player-score flex-none text-right text-3xl text-white">1000</div>
</div>

<div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
    <div className="player-name flex-1 text-4xl text-white">Player 1</div>
    <div className="player-score flex-none text-right text-3xl text-white">1000</div>
</div>
<div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
    <div className="player-name flex-1 text-4xl text-white">Player 1</div>
    <div className="player-score flex-none text-right text-3xl text-white">1000</div>
</div>
<div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
    <div className="player-name flex-1 text-4xl text-white">Player 1</div>
    <div className="player-score flex-none text-right text-3xl text-white">1000</div>
</div>
<div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
    <div className="player-name flex-1 text-4xl text-white">Player 1</div>
    <div className="player-score flex-none text-right text-3xl text-white">1000</div>
</div>
<div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
    <div className="player-name flex-1 text-4xl text-white">Player 1</div>
    <div className="player-score flex-none text-right text-3xl text-white">1000</div>
</div>
<div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
    <div className="player-name flex-1 text-4xl text-white">Player 1</div>
    <div className="player-score flex-none text-right text-3xl text-white">1000</div>
</div>




</div>
</div>
      </motion.h1>
    </LampContainer>
  );

}
