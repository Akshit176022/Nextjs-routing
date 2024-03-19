import Herosection from "@/components/herosection"
import Image from "next/image";
import Footer from "@/components/footer";
import { BackgroundBeams } from "@/components/background-beams";
import Rules from "@/components/rules";


export default function Home() {
  return (
 <main className="min-h-screen bg-black/[.96] antialiased bd-grid-white/[0.02]">

  <Herosection/>
 



 <BackgroundBeams />
<Rules/>

 </main>
  );
}
