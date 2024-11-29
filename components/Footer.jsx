'use client';
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

 const Footer = () => { 
  return (
    <footer className="bg-background ">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
            Let us help you on your journey to find a new friend who will bring joy and companionship to your life!
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Find Us</h3>
            <p className="text-sm text-muted-foreground">1234 Pet Lane, Gent, Belgium</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-muted-foreground">Email: <a href="mailto:info@tinpet.com" className="text-blue-500">info@tinpet.com</a></p>
            <p className="text-sm text-muted-foreground">Phone: (123) 456-7890</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-2 justify-center">
              <Button size="icon" variant="ghost">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button size="icon" variant="ghost">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button size="icon" variant="ghost">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button size="icon" variant="ghost">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TINPET. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;