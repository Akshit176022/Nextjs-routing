"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";



function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-0 w-full inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Leaderboard">

        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Sign Up">

        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Rules">
   
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar