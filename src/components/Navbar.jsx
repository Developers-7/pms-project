
'use client';

import { useState, useEffect } from 'react';
import Button from "@/components/ui/Button";
import { useT } from "@/i18n/client";
import Link from 'next/link';
import { ArrowRightIcon, ChevronDownIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import VideoPlayer from './VideoPlayer';


export default function Navbar() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  // useEffect(() => {
  //   if (!open) return;

  //   const handleClickOutside = () => setOpen(false);
  //   document.addEventListener('click', handleClickOutside);

  //   return () => document.removeEventListener('click', handleClickOutside);
  // }, [open]);

  return (
    <div className="">
      {/* Header */}
      <header className={cn(
        "w-full sticky top-0 z-50 transition-all duration-300",
        scrolled ? "h-16 shadow-md bg-white/95 backdrop-blur-sm" : "h-20 shadow-sm bg-white"
      )}>
        <div className="container mx-auto h-full px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo/pms.svg" alt="Logo" width={scrolled ? 45 : 57} height={scrolled ? 45 : 57} className="transition-all duration-300" />
            <div>
              <h1 className="text-[var(--color-primary)] font-semibold primary transition-all duration-300" style={{ fontSize: scrolled ? '1rem' : '1.125rem' }}>{t('pharmacy')}</h1>
              <p className="text-[#494A57] -mt-1 transition-all duration-300" style={{ fontSize: scrolled ? '0.75rem' : '0.875rem' }}>{t('management_system')}</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1 text-sm font-semibold text-[#2D2D34]">
            <div className='p-3'>
              <Link href="/" className="hover:text-[#AB323C] transition-colors">{t('home')}</Link>
            </div>
            <div className="relative p-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
                className="flex items-center space-x-1 hover:text-[#AB323C] transition-colors"
              >
                <span>{t('service')}</span>
                <ChevronDownIcon className={cn("w-4 h-4 transition-transform", open ? "rotate-180" : "")} />
              </button>
              {open && (
                <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-lg z-50 px-4 py-2 text-sm min-w-40 animate-fadeIn">
                  <Link href="/services/1" className="block py-2 hover:text-[#AB323C] transition-colors">{t('service_one')}</Link>
                  <Link href="/services/2" className="block py-2 hover:text-[#AB323C] transition-colors">{t('service_two')}</Link>
                </div>
              )}
            </div>
            <div className='p-3'>
              <Link href="/about" className="hover:text-[#AB323C] transition-colors">{t('about_us')}</Link>
            </div>
            <div className='p-3'>
              <Link href="/contact" className="hover:text-[#AB323C] transition-colors">{t('contact')}</Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ?
                <XMarkIcon className="w-6 h-6" /> :
                <Bars3Icon className="w-6 h-6" />
              }
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              as='Link'
              href="/get-started"
              icon={<ArrowUpRightIcon className="w-4 h-4" />}
              iconPosition='right'
              className='px-5 py-2.5 text-base font-semibold leading-[150%] tracking-[-0.02em] text-center rounded-lg bg-[#AB323C] text-white hover:bg-[#9A2D36] transition-colors gap-2'
            >
              <span>{t('start')}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden relative transform `}>
            <div className='w-full h-screen bg-black opacity-70 absolute top-0 left-0 z-10' onClick={() => setMobileMenuOpen(false)} />
            <div className="md:hidden absolute top-full left-0 z-20 w-full bg-white border-t shadow-lg animate-slideDown">
              <div className="px-4 py-3 space-y-1">
                <Link href="/" className="block py-2 text-[#2D2D34] hover:text-[#AB323C] transition-colors">{t('home')}</Link>

                <div>
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between w-full py-2 text-[#2D2D34] hover:text-[#AB323C] transition-colors"
                  >
                    <span>{t('service')}</span>
                    <ChevronDownIcon className={cn("w-4 h-4 transition-transform", open ? "rotate-180" : "")} />
                  </button>
                  {open && (
                    <div className="pl-4 border-l-2 border-gray-200 ml-2 mt-1">
                      <Link href="/services/1" className="block py-2 text-[#2D2D34] hover:text-[#AB323C] transition-colors">{t('service_one')}</Link>
                      <Link href="/services/2" className="block py-2 text-[#2D2D34] hover:text-[#AB323C] transition-colors">{t('service_two')}</Link>
                    </div>
                  )}
                </div>

                <Link href="/about" className="block py-2 text-[#2D2D34] hover:text-[#AB323C] transition-colors">{t('about_us')}</Link>
                <Link href="/contact" className="block py-2 text-[#2D2D34] hover:text-[#AB323C] transition-colors">{t('contact')}</Link>

                <div className="pt-2">
                  <Button
                    as='Link'
                    href="/get-started"
                    icon={<ArrowUpRightIcon className="w-4 h-4" />}
                    iconPosition='right'
                    className='w-full py-2.5 text-base font-semibold text-center rounded-lg bg-[#AB323C] text-white hover:bg-[#9A2D36] transition-colors gap-2'
                  >
                    <span>{t('start')}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}

    </div>
  );
}

