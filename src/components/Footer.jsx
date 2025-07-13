/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 10 Jul 2025
 * Time: 12:31 PM
 * Email: zishan.softdev@gmail.com
 */


'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Facebook, Instagram, Linkedin} from 'lucide-react';
import Heading from '@/components/typography/Heading';
import SubHeading from '@/components/typography/SubHeading';
import Text from '@/components/typography/Text';
import SectionCardLayout from '@/components/SectionCard/SectionCardLayout';
import SectionCardContainer from '@/components/SectionCard/SectionCardContainer';
import FooterLogo from "@/assets/images/pms.png"

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <SectionCardLayout className="container">

                <SectionCardContainer space="rightspace">

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
                    <div className="border-t border-gray-700 mt-6 pt-6 w-full text-sm text-gray-400">

                        <div className="flex justify-between">
                            <Text>
                                © ২০২৫ ফার্মাসি ম্যানেজমেন্ট সিস্টেম — সর্বস্বত্ব সংরক্ষিত
                            </Text>

                            <div className="flex space-x-4">
                                <Link href="#"><Facebook className="w-5 h-5"/></Link>
                                <Link href="#"><Instagram className="w-5 h-5"/></Link>
                                <Link href="#"><Linkedin className="w-5 h-5"/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2.5 ">
                        <Image src={FooterLogo} alt="Footer Logo" width={60} height={60}/>
                        <div className="flex flex-col">
                            <Heading className=" ">Pharmacy</Heading>
                            <SubHeading>Management System</SubHeading>
                        </div>

                    </div>

                </SectionCardContainer>
            </SectionCardLayout>
        </footer>
    );
}
