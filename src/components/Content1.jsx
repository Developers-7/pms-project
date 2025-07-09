/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 08 Jul 2025
 * Time: 12:14 PM
 * Email: zishan.softdev@gmail.com
 */

'use client';

import { useState } from 'react';
import Button from "@/components/ui/Button";
import { useT } from "@/i18n/client";
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { cn } from "@/lib/utils";

export default function Content1() {
    const t = useT();
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        ফার্মেসি ম্যানেজ করতে যা লাগে
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-600">
                        <span>ইনভেন্টরি ম্যানেজমেন্ট</span>
                        <span className="hidden md:inline">-</span>
                        <span>বিক্রয় ও বিলিং</span>
                        <span className="hidden md:inline">-</span>
                        <span>অ্যাকাউন্টিং এবং রিপোর্ট</span>
                        <span className="hidden md:inline">-</span>
                        <span>রিমোট অ্যাক্সেসের জন্য মোবাইল অ্যাপ</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            ইনভেন্টরি ম্যানেজমেন্ট
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            আমাদের স্মার্ট ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম আপনার ব্যবসা কে নতুন উচ্চতায় নিয়ে যাবে। উইন্ডোজ, লিনাক্স, ম্যাক এবং অ্যান্ড্রয়েড সহ সব ধরনের ডিভাইস থেকে ব্যবহার করুন। এক্সপায়ারি ড্রাগ, ড্রাগ কোড, প্রোডাক্ট নেম, কোম্পানি নেম, বার্চ নাম্বার সহ সব ধরনের ডেটা সংরক্ষণ করুন। আপনার ব্যবসায়িক তথ্যের জন্য আমাদের সার্ভিস ব্যবহার করুন। আমাদের সম্পূর্ণ ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম আপনার স্টক এবং সেলস ট্র্যাক করুন। এমনকি আপনার সঠিক প্রোডাক্টের সংখ্যা গণনা করুন।
                        </p>
                        <Button
                            variant="primary"
                            size="md"
                            icon={<ArrowUpRightIcon className="w-4 h-4" />}
                            iconPosition="right"
                            className="bg-red-600 hover:bg-red-700"
                        >
                            আরও জানুন
                        </Button>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                                src="/pharmacy-counter.jpg"
                                alt="Pharmacy Counter"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}