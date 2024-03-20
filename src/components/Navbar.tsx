"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-0  z-50 text-2xl  gap-5 ", className)}
    >
      <Menu setActive={setActive}>
      <Link  href="/board"> 
      <MenuItem setActive={setActive} active={active}  item="Leaderboard">

</MenuItem>
      </Link>

   <Link href="./sign">
   <MenuItem setActive={setActive} active={active} item=" Sign Up">

</MenuItem>
   </Link>
<Link href="./rule">
<MenuItem setActive={setActive} active={active} item="Rules">
   
   </MenuItem>
</Link>
    
      </Menu>
    </div>
  );
}

export default Navbar