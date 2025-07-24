"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header({ navigation }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServicesDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleServicesDropdown = () => {
    setShowServicesDropdown((prev) => !prev);
  };
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
            {navigation.links.map((link) => {
              const hasChildren = Array.isArray(link.children);
              return hasChildren ? (
                <div key={link.text} className="relative" ref={dropdownRef}>
                  <button
                    className="text-white/80 hover:text-textSecondary transition-colors duration-200 flex items-center"
                    onClick={() => setShowServicesDropdown((prev) => !prev)}
                  >
                    {link.text}
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        showServicesDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showServicesDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-[12rem] bg-white rounded-2xl border border-gray-200 shadow-2xl z-50 overflow-hidden">
                      <div className="p-2 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.text}
                            href={child.href}
                            onClick={() => setShowServicesDropdown(false)}
                            className="block w-full text-left text-black  hover:text-green-600 hover:bg-gray-50 transition-all duration-200 text-sm py-2 px-2 rounded-lg"
                          >
                            {child.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.text}
                  href={link.href}
                  className="text-white/80 hover:text-textSecondary transition-colors duration-200"
                >
                  {link.text}
                </Link>
              );
            })}
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
            <nav className="flex flex-col space-y-2 mt-4">
              {navigation.links.map((link) => {
                const hasChildren = Array.isArray(link.children);
                const isOpen = openMobileDropdown === link.text;

                return (
                  <div key={link.text} className="flex flex-col">
                    <button
                      onClick={() => {
                        if (hasChildren) {
                          setOpenMobileDropdown(isOpen ? null : link.text);
                        } else {
                          setIsMenuOpen(false);
                        }
                      }}
                      className="text-white/80 hover:text-textSecondary transition-colors duration-200 flex justify-between items-center w-full px-1 py-2"
                    >
                      <span>{link.text}</span>
                      {hasChildren && (
                        <ChevronDown
                          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {hasChildren && isOpen && (
                      <div className="pl-4 flex flex-col space-y-2 mt-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.text}
                            href={child.href}
                            className="text-white/60 hover:text-white transition-colors duration-200 text-sm py-1"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenMobileDropdown(null);
                            }}
                          >
                            {child.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* CTA */}
              <Button
                asChild
                className="bg-textSecondary hover:bg-textSecondary text-white border-green-600 hover:border-green-700 w-fit mt-4"
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
