/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 10 Jul 2025
 * Time: 11:11 AM
 * Email: zishan.softdev@gmail.com
 */


'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid';

import { useT } from '@/i18n/client';
import Button from '@/components/ui/Button';
import Heading from '@/components/typography/Heading';
import SubHeading from '@/components/typography/SubHeading';
import SectionCardLayout from '@/components/SectionCard/SectionCardLayout';
import SectionCardContainer from '@/components/SectionCard/SectionCardContainer';

export default function HeaderWithLayout() {
    const t = useT();
    const [open, setOpen] = useState(false);

    return (
        <SectionCardLayout>
                <SectionCardContainer>
                    {/* Left Side: Logo + Title */}
                    <div className="flex items-center space-x-2">
                        <Image src="/logo/pms.svg" alt="Logo" width={32} height={32} />
                        <div>
                            <Heading className="text-sm text-[var(--color-primary)] font-semibold">
                                {t('pharmacy')}
                            </Heading>
                            <SubHeading className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                                {t('management_system')}
                            </SubHeading>
                        </div>
                    </div>

                    {/* Right Side: Nav + Button */}
                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-700 dark:text-gray-200">
                        <nav className="hidden md:flex items-center space-x-6">
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
                                    <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border rounded shadow-md z-50 px-4 py-2 text-sm">
                                        <Link href="/services/1" className="block py-1 hover:text-red-600">{t('service_one')}</Link>
                                        <Link href="/services/2" className="block py-1 hover:text-red-600">{t('service_two')}</Link>
                                    </div>
                                )}
                            </div>

                            <Link href="/about" className="hover:text-red-600 transition">{t('about_us')}</Link>
                            <Link href="/contact" className="hover:text-red-600 transition">{t('contact')}</Link>
                        </nav>

                        <Button
                            as="Link"
                            href="/get-started"
                            icon={<ArrowUpRightIcon className="w-4 h-4" />}
                            iconPosition="right"
                        >
                            {t('start')}
                        </Button>
                    </div>
                </SectionCardContainer>
        </SectionCardLayout>
    );
}
