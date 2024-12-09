'use client';
import React from 'react';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-customBeige">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-gray-600">
              Let us help you on your journey to find a new friend who will bring joy and companionship to your life!
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Find Us</h3>
            <p className="text-sm text-gray-600">1234 Pet Lane, Gent, Belgium</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-gray-600">Email: <a href="mailto:info@tinpet.com" className="text-blue-500">info@tinpet.com</a></p>
            <p className="text-sm text-gray-600">Phone: (123) 456-7890</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-2 justify-center">
              <a href="https://www.facebook.com/becode.org/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost">
                  <FaFacebook className="h-6 w-6 text-blue-600" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </a>
              <a href="https://x.com/becodeorg" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost">
                  <FaXTwitter className="h-6 w-6 text-blue-400" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </a>
              <a href="https://www.instagram.com/becodeorg/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost">
                  <FaInstagram className="h-6 w-6 text-pink-500" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </a>
              <a href="https://www.linkedin.com/company/becode.org/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost">
                  <FaLinkedin className="h-6 w-6 text-blue-700" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} TINPET. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;