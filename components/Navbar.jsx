"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the mobile menu

  return (
    <nav className="bg-gray-800 p-4 m-4 rounded">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">TINPET</div>
        <div className="hidden md:flex space-x-4">
          {" "}
          {/* Only show on medium screens and up */}
          <Link href="/" className="text-white  text-lg hover:underline">
            Home
          </Link>
          <Link href="/pets" className="text-white text-lg  hover:underline">
            Our Pets
          </Link>
          <Link href="/about" className="text-white text-lg  hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-white text-lg hover:underline">
            Contact Us
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <Link href="/" className="block text-white text-lg hover:underline">
            Home
          </Link>
          <Link
            href="/pets"
            className="block text-white text-lg hover:underline">
            Our Pets
          </Link>

          <Link
            href="/about"
            className="block text-white text-lg hover:underline">
            About
          </Link>
          <Link
            href="/contact"
            className="block text-white text-lg hover:underline">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
