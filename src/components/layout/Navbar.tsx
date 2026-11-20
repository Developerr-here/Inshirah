"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/shared/Logo";
import Button from "@/components/shared/Button";
import { Menu, X, ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { YoutubeIcon, TelegramIcon } from "@/components/shared/Icons";
import { instituteData } from "@/data/institute";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Lectures", href: "/lectures" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = pathname === "/";
  // When scrolled OR not on home page, use solid background
  const useSolidNav = isScrolled || !isHome;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        useSolidNav
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-md border-b border-[#C5A15D]/30 py-3"
          : "bg-[#071F38] border-b border-[#C5A15D]/20 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo
            variant={useSolidNav ? "light" : "dark"}
            size="md"
            showTagline={true}
          />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium tracking-wide rounded-md transition-all relative ${
                    useSolidNav
                      ? isActive
                        ? "text-[#071F38] font-bold bg-[#EAE3D6]"
                        : "text-[#17283A] hover:text-[#C5A15D] hover:bg-[#EAE3D6]/50"
                      : isActive
                      ? "text-[#D9B979] font-bold bg-white/10"
                      : "text-[#FAF8F5]/85 hover:text-[#D9B979] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${
                        useSolidNav ? "bg-[#C5A15D]" : "bg-[#D9B979]"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant={useSolidNav ? "primary" : "primary"}
              size="sm"
              href="/admissions"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors focus:outline-none ${
              useSolidNav
                ? "text-[#071F38] hover:bg-[#EAE3D6]"
                : "text-[#FAF8F5] hover:bg-white/10"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#C5A15D]/20 bg-[#FAF8F5] px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#EAE3D6] text-[#071F38] font-bold border-l-4 border-[#C5A15D]"
                      : "text-[#17283A] hover:bg-[#EAE3D6]/50 hover:text-[#C5A15D]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#071F38]/10 space-y-3">
            <Button
              variant="primary"
              size="md"
              href="/admissions"
              className="w-full justify-center"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Enquire for Admission
            </Button>

            <div className="flex items-center justify-around pt-2 text-xs text-[#6B7280]">
              <a
                href={instituteData.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4 text-red-600" />
                <span>YouTube</span>
              </a>
              <span className="text-[#071F38]/20">|</span>
              <a
                href={instituteData.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-500 transition-colors"
              >
                <TelegramIcon className="w-4 h-4 text-blue-500" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
