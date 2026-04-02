"use client";

import { Mail, Phone, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

import { LanguageSwitcher } from "@/components/common/language-switcher";

export function TopNavbar() {
  return (
    <div className="bg-blue-950 text-white py-2 text-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-white/80" />
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white/80 transition-colors text-sm">
              {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-white/80" />
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white/80 transition-colors text-sm">
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white/80 transition-colors" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors" aria-label="YouTube">
              <Youtube size={16} />
            </a>
          </div>
          
          {/* <div className="h-4 w-px bg-white/20" /> */}
          
          {/* <LanguageSwitcher className="hover:text-cyan-400 border-white/20 bg-white/5 hover:bg-white/10" /> */}
        </div>
      </div>
    </div>
  );
}
