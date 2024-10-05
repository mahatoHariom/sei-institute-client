"use client";
import React, { useState } from "react";
import NavLink from "./nav-link";
import Iconify from "@/components/global/iconify";
import MobileMenu from "./mobile-menu";
import { NavbarProps } from "@/types/navbar.types";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/global/theme-toggle";

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-foreground shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-center">
            <h1 className="text-xl font-bold capitalize">sei institute</h1>
            <p className="text-xs">Join a scholar , be a scholar</p>
          </div>
          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-4 items-center">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
            <Button variant={"destructive"}>Join Us</Button>
            <ModeToggle />
          </div>
          {/* Hamburger Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <Iconify name={isOpen ? "mdi:close" : "mdi:menu"} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu links={links} />}
    </nav>
  );
};

export default Navbar;
