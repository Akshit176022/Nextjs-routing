import Herosection from "@/components/herosection";
import Image from "next/image";
import Footer from "@/components/footer";
import { BackgroundBeams } from "@/components/background-beams";
import Rules from "@/components/rules";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import Sparkle from "@/components/sparkle"
import { Button } from "@/components/ui/moving-border";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Sign from "@/components/sign"

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces`



export default function Home() {
  return (


    <div className="min-h-screen bg-black antialiased bd-grid-white/[0.02]">

      <Sparkle/>
      <div className="mb-400 font-normal text-base text-neutral-300  text-center  w-800 ">


      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
      >
      Play Game 
      </Button>
    </div>
      <BackgroundBeams />
    </div>
    
  );
}
