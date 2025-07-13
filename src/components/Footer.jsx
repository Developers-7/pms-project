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
        <footer className="bg-black text-white pt-16 pb-8">
            <SectionCardLayout className="container">


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">

                    <div className="space-y-1 justify-self-start">
                        <SubHeading className="text-white mb-2">পণ্য</SubHeading>
                        <ul className="space-y-4 text-gray-300">
                            <li><Link href="#">মুল্য নির্ধারণ</Link></li>
                            <li><Link href="#" className="text-red-500">বিক্রয়</Link></li>
                        </ul>
                    </div>


                    <div className="space-y-1 justify-self-center">
                        <SubHeading className="text-white mb-2">কোম্পানির</SubHeading>
                        <ul className="space-y-4 text-gray-300">
                            <li><Link href="#">আমাদের সম্পর্কে</Link></li>
                            <li><Link href="#">ক্যারিয়ার</Link></li>
                            <li><Link href="#">ব্লগ</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-1 justify-self-end">
                        <SubHeading className="text-white mb-2">যোগাযোগ করুন</SubHeading>
                        <ul className="text-sm text-gray-300 space-y-4">
                            <li>info@pms.com</li>
                            <li>
                                লেভেল ০৬, রোড ০৩, ব্লক ০১, সেক্টর ০৩, উত্তরা, ঢাকা, বাংলাদেশ
                            </li>
                            <li>সামাজিক মাধ্যম</li>
                        </ul>
                    </div>
                </div>


                {/* Divider */}
                <div>
                    <div className="border-t border-gray-700 mt-8 pt-6 w-full"></div>
                    <div className="flex justify-between text-sm text-gray-400">
                        <Text>
                            © ২০২৫ ফার্মাসি ম্যানেজমেন্ট সিস্টেম — সর্বস্বত্ব সংরক্ষিত
                        </Text>

                        <div className="flex space-x-4">
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

                {/* Put a divider */}

                <div className="flex items-center justify-center gap-3">
                    <Image src={FooterLogo} alt="Footer Logo" width={60} height={60} />
                    <div className="flex flex-col gap-1">
                        <h2 className="font-['Roboto'] text-5xl font-bold leading-[100%] text-[#AB323C]">
                            Pharmacy
                        </h2>
                        <h3 className="font-['Roboto'] font-normal text-2xl leading-[100%] text-white">
                            Management System
                        </h3>
                    </div>
                </div>

            </SectionCardLayout>
        </footer>
    );
}
