"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { NAVIGATION, CONTACT_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if a route is active
  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top duration-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex animate-in fade-in slide-in-from-left duration-500">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item, index) => {
              const isActive = isActiveRoute(item.href);
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors animate-in fade-in duration-500 relative group ${
                    isActive 
                      ? 'text-cyan-600' 
                      : 'text-slate-700 hover:text-cyan-600'
                  }`}
                  style={{ fontFamily: 'var(--font-inter)', animationDelay: `${(index + 1) * 75}ms` }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <a href={`tel:${CONTACT_INFO.phone}`} className="animate-in fade-in slide-in-from-right duration-500">
            <Button className="hidden sm:inline-flex bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
              Contact US
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {NAVIGATION.map((item) => {
              const isActive = isActiveRoute(item.href);
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive 
                      ? 'text-cyan-600 bg-cyan-50' 
                      : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href={`mailto:${CONTACT_INFO.email}`}>
              <Button className="w-full mt-2 bg-cyan-600 hover:bg-cyan-700 text-white">
                Contact US
              </Button>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}