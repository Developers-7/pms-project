'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import SubHeading from '@/components/typography/SubHeading';
import Text from '@/components/typography/Text';
import SectionCardLayout from '@/components/SectionCard/SectionCardLayout';
import FooterLogo from "@/assets/images/pms.png"

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-1 lg:pt-12 md:pt-16 pb-8">
            <SectionCardLayout className="container pl-4">
                {/* Footer Links - Single column on mobile, multi-column on larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-8 w-full">
                    {/* Products Column - Left aligned on all screens */}
                    <div className="space-y-4 flex flex-col items-start">
                        <SubHeading className="text-white mb-2 text-left">পণ্য</SubHeading>
                        <ul className="space-y-4 text-gray-300 text-left">
                            <li><Link href="#" className="hover:text-[#AB323C] transition-colors">মুল্য নির্ধারণ</Link></li>
                            <li><Link href="#" className="text-[#AB323C] hover:text-[#9A2D36] transition-colors">বিক্রয়</Link></li>
                        </ul>
                    </div>

                    {/* Company Column - Left aligned on mobile, start aligned on larger screens */}
                    <div className="space-y-4 flex flex-col items-start">
                        <SubHeading className="text-white mb-2 text-left">কোম্পানির</SubHeading>
                        <ul className="space-y-4 text-gray-300 text-left">
                            <li><Link href="#" className="hover:text-[#AB323C] transition-colors">আমাদের সম্পর্কে</Link></li>
                            <li><Link href="#" className="hover:text-[#AB323C] transition-colors">ক্যারিয়ার</Link></li>
                            <li><Link href="#" className="hover:text-[#AB323C] transition-colors">ব্লগ</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column - Left aligned on mobile, right aligned on large screens */}
                    <div className="space-y-4 flex flex-col items-start lg:items-end">
                        <SubHeading className="text-white mb-2 text-left lg:text-right">যোগাযোগ করুন</SubHeading>
                        <ul className="text-sm text-gray-300 space-y-4 text-left lg:text-right">
                            <li className="hover:text-[#AB323C] transition-colors cursor-pointer">info@pms.com</li>
                            <li className="max-w-xs">
                                লেভেল ০৬, রোড ০৩, ব্লক ০১, সেক্টর ০৩, উত্তরা, ঢাকা, বাংলাদেশ
                            </li>
                            <li>সামাজিক মাধ্যম</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div>
                    <div className="border-t border-gray-700 mt-8 pt-6 w-full"></div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-400">
                        <Text className="text-left">
                            © ২০২৫ ফার্মাসি ম্যানেজমেন্ট সিস্টেম — সর্বস্বত্ব সংরক্ষিত
                        </Text>

                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <Facebook className="w-4 h-4 text-black" />
                            </Link>
                            <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <Instagram className="w-4 h-4 text-black" />
                            </Link>
                            <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <Linkedin className="w-4 h-4 text-black" />
                            </Link>
                        </div>
                    </div>

                    {/* Second Divider */}
                    <div className="border-t border-gray-700 mt-8 pt-6 w-full"></div>
                </div>

                {/* Footer Logo - Left aligned on mobile, centered on larger screens */}
                <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-3 mt-4">
                    <Image src={FooterLogo} alt="Footer Logo" width={60} height={60} />
                    <div className="flex flex-col gap-1 items-start">
                        <h2 className="font-['Roboto'] text-4xl md:text-5xl font-bold leading-[100%] text-[#AB323C] text-left">
                            Pharmacy
                        </h2>
                        <h3 className="font-['Roboto'] font-normal text-xl md:text-2xl leading-[100%] text-white text-left">
                            Management System
                        </h3>
                    </div>
                </div>
            </SectionCardLayout>
        </footer>
    );
}
