"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the mobile menu
  
  const [sessionExist, setSessionExist] = useState(() => {
    if (localStorage.getItem("login")) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (localStorage.getItem("login")) {
      console.log("login or registration exist");
      setSessionExist(true);
    } else {
      console.log("No registration or login exist");
      setSessionExist(false);
    }
  }, []);

  async function logOut() {
    localStorage.removeItem('login');
    localStorage.removeItem('registration');
    try {
      const response = await fetch('http://localhost:3001/api/v1/logout', {
        method: "GET",
        credentials: 'include'
      });
    } catch (e) {
      console.error(e);
    }
  }


  return (
    <nav className="bg-customBrown  w-auto m-4 rounded">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-white text-lg font-bold">TINPET</div>
        <div className="hidden md:flex space-x-4">
          {" "}
          {/* Only show on medium screens and up */}
          <Link href="/" className="text-white  text-lg hover:underline">
            Home
          </Link>
          <Link href="/our-pets" className="text-white text-lg  hover:underline">
            Our Pets
          </Link>
          <Link href="/pet-form" className="text-white text-lg  hover:underline">
            Put up for adoption
          </Link>
          <Link href="/about" className="text-white text-lg  hover:underline">
            About
          </Link>
          <Link href="/contact-us" className="text-white text-lg hover:underline">
            Contact Us
          </Link>
          {!sessionExist && <Link href="/register" className="text-white text-lg hover:underline">
            Register
          </Link>}
          {!sessionExist && <Link href="/login" className="text-white text-lg hover:underline">
            Log in
          </Link>}
          {sessionExist && <button onClick={() => {logOut()}}
            href="/"
            className="block text-white text-lg hover:underline">
            Log Out
          </button>}
          
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
            href="/pet-form"
            className="block text-white text-lg hover:underline">
            Put up for adoption
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
          {!sessionExist && <Link
            href="/register"
            className="block text-white text-lg hover:underline">
            Register
          </Link>}
          {!sessionExist &&<Link
            href="/login"
            className="block text-white text-lg hover:underline">
            Log In
          </Link>}
          {sessionExist && <button onClick={() => {logOut()}}
            href="/"
            className="block text-white text-lg hover:underline">
            Log Out
          </button>}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
