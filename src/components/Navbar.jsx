
'use client';

import { useState } from 'react';
import Button from "@/components/ui/Button";
import { useT } from "@/i18n/client";
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { cn } from "@/lib/utils";


export default function Navbar() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [toggleEnabled, setToggleEnabled] = useState(false);

  const toggleSwitch = () => {
    setToggleEnabled(!toggleEnabled);
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
        {/* Header */}
        <header className="w-full h-20 sticky top-0 z-100 shadow-sm bg-white">
          <div className="max-w-7xl h-20 mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image src="/logo/pms.svg" alt="Logo" width={32} height={32} />
              <div>
                <h1 className="text-sm text-[var(--color-primary)] font-semibold primary">{t('pharmacy')}</h1>
                <p className="text-xs text-gray-500 -mt-1">{t('management_system')}</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
              <Link href="/" className="hover:text-red-600 transition">{t('home')}</Link>

              <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center space-x-1 hover:text-red-600 transition"
                >
                  <span>{t('service')}</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {open && (
                    <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-md z-50 px-4 py-2 text-sm">
                      <Link href="/services/1" className="block py-1 hover:text-red-600">{t('service_one')}</Link>
                      <Link href="/services/2" className="block py-1 hover:text-red-600">{t('service_two')}</Link>
                    </div>
                )}
              </div>

              <Link href="/about" className="hover:text-red-600 transition">{t('about_us')}</Link>
              <Link href="/contact" className="hover:text-red-600 transition">{t('contact')}</Link>
            </nav>

            <div>
              <Button
                  as='Link'
                  href="/get-started"
                  icon={<ArrowUpRightIcon className="w-4 h-4" />}
                  iconPosition='right'
              >
                <span>{t('start')}</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section with Text */}
            <div className="text-center mb-8">
              <div className="text-[80px] mb-4 leading-[80px] font-normal text-center font-[KalindiOMJ]">
                {t('manage_pharmacy')}
              </div>

              <p className="text-gray-600 mb-8">
                {t('all_in_one_app')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                    variant="primary"
                    size="md"
                    icon={<ArrowUpRightIcon className="w-4 h-4"/>}
                    iconPosition="right"
                >
                  {t('start_free_trail')}
                </Button>
                <Button
                    variant="ghost"
                    size="md"
                    className="text-gray-600 hover:text-gray-800"
                >
                  {t('watch_demo')}
                </Button>
              </div>
            </div>

            {/* Video Demo Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-16 flex items-center justify-center min-h-[500px] relative">
                <div className="text-center">
                  {/* Main Title */}
                  <h2 className="text-5xl md:text-6xl font-light text-gray-600 mb-8">
                    {t('outlook')}
                  </h2>

                  {/* Toggle Switch */}
                  <div className="flex items-center justify-center">
                    <button
                        onClick={toggleSwitch}
                        className={cn(
                            "w-16 h-8 rounded-full p-1 transition-all duration-300 ease-in-out",
                            toggleEnabled ? "bg-blue-500" : "bg-gray-400"
                        )}
                    >
                      <div
                          className={cn(
                              "w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out",
                              toggleEnabled ? "translate-x-8" : "translate-x-0"
                          )}
                      />
                    </button>
                  </div>
                </div>

                {/* Pause Control in Corner */}
                <div className="absolute bottom-6 right-6">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                    <div className="flex space-x-1">
                      <div className="w-1 h-4 bg-gray-600 rounded"></div>
                      <div className="w-1 h-4 bg-gray-600 rounded"></div>
                    </div>
                    <span className="text-sm font-medium">{t('pause')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}