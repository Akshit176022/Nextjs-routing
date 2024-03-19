"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles"

export  default function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="leaderboard w-3/12 mx-auto mt-100 border border-solid border-gray-300 rounded-lg overflow-hidden shadow-md mt-40">
    <div className="leaderboard-header bg-slate-600 text-white text-center py-1 text-4xl font-space-age">Leaderboard</div>
    
    <div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
        <div className="player-name flex-1 text-3xl text-white">Player 1</div>
        <div className="player-score flex-none text-right text-3xl text-white">1000</div>
    </div>
    
    <div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
        <div className="player-name flex-1 text-3xl text-white">Player 2</div>
        <div className="player-score flex-none text-right text-3xl text-white">900</div>
    </div>
    <div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
        <div className="player-name flex-1 text-3xl text-white">Player 3</div>
        <div className="player-score flex-none text-right text-3xl text-white">800</div>
    </div>
    <div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
        <div className="player-name flex-1 text-3xl text-white">Player 4</div>
        <div className="player-score flex-none text-right text-3xl text-white">700</div>
    </div>
    <div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
        <div className="player-name flex-1 text-3xl text-white">Player 5</div>
        <div className="player-score flex-none text-right text-3xl text-white">600</div>
    </div>
    <div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
        <div className="player-name flex-1 text-3xl text-white">Player 6</div>
        <div className="player-score flex-none text-right text-3xl text-white">500</div>
    </div>   <div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
        <div className="player-name flex-1 text-3xl text-white">Player 7</div>
        <div className="player-score flex-none text-right text-3xl text-white">400</div>
    </div>   <div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
        <div className="player-name flex-1 text-3xl text-white">Player 8</div>
        <div className="player-score flex-none text-right text-3xl text-white">300</div>
    </div>   <div className="leaderboard-item flex justify-between items-center py-1 border-b border-solid border-gray-300">
        <div className="player-name flex-1 text-3xl text-white">Player 9</div>
        <div className="player-score flex-none text-right text-3xl text-white">200</div>
    </div>
    


</div>
    </div>
  ); 
}
