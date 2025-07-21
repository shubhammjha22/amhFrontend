"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header({ navigation }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-textPrimary/20 px-12 md:px-20 lg:px-32  sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={navigation.logo.link}
            className="flex items-center space-x-2"
          >
            <div className=" ">
              <Image
                src="/logo.svg"
                alt="Outscale Partners Logo"
                width={58}
                height={41}
              />
            </div>
            <span className="text-white font-semibold text-lg">
              {navigation.logo.text}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center text-base space-x-8">
            {navigation.links.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="text-white/80 hover:text-textSecondary transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-textPrimary/60 text-textPrimary hover:bg-textPrimary/20 hover:text-textSecondary hover:border-textSecondary px-6 py-2 rounded-lg transition-all duration-300"
            >
              <Link href={navigation.cta.href}>{navigation.cta.text}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 mt-4">
              {navigation.links.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="text-white/80 hover:text-textSecondary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <Button
                asChild
                className="bg-textSecondary hover:bg-textSecondary text-white border-green-600 hover:border-green-700 w-fit"
              >
                <Link href={navigation.cta.href}>{navigation.cta.text}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
