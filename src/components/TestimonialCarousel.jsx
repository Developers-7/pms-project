'use client';

import { Carousel } from 'antd';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function TestimonialCarousel() {
    const carouselRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            text: "এই প্ল্যাটফর্মটি আমাদের সম্পত্তি পরিচালনার পদ্ধতিতে বিপ্লব এনেছে। সবকিছু এখন সুবিন্যস্ত এবং দক্ষ।",
            name: "জন স্মিথ",
            title: "সম্পত্তি ব্যবস্থাপক",
            avatar: "/assets/images/card_img1.png"
        },
        {
            id: 2,
            text: "এই প্ল্যাটফর্মটি আমাদের সম্পত্তি পরিচালনার পদ্ধতিতে বিপ্লব এনেছে। সবকিছু এখন সুবিন্যস্ত এবং দক্ষ।",
            name: "জন স্মিথ",
            title: "সম্পত্তি ব্যবস্থাপক",
            avatar: "/assets/images/card_img2.png"
        },
        {
            id: 3,
            text: "এই প্ল্যাটফর্মটি আমাদের সম্পত্তি পরিচালনার পদ্ধতিতে বিপ্লব এনেছে। সবকিছু এখন সুবিন্যস্ত এবং দক্ষ।",
            name: "জন স্মিথ",
            title: "সম্পত্তি ব্যবস্থাপক",
            avatar: "/assets/images/card_img3.png"
        }
    ];

    const next = () => {
        carouselRef.current?.next();
    };

    const prev = () => {
        carouselRef.current?.prev();
    };

    return (
        <div className="relative max-w-6xl mx-auto">
            <Carousel
                ref={carouselRef}
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={3}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={4000}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]}
            >
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="px-3">
                        <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col justify-between min-h-[300px]">
                            {/* Testimonial Text */}
                            <div className="mb-8">
                                <p className="text-gray-700 text-[16px] leading-[160%] font-['Noto_Sans_Bengali_UI'] font-normal">
                                    {testimonial.text}
                                </p>
                            </div>

                            {/* User Info */}
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-black text-[18px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-gray-500 text-[14px] font-normal leading-[140%] font-['Noto_Sans_Bengali_UI'] mt-1">
                                        {testimonial.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-4 mt-8">
                <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border-1 border-[#AB323C] flex items-center justify-center hover:bg-red-50 transition-colors group hover:cursor-pointer"
                >
                    <ChevronLeftIcon className="w-5 h-5 text-[#AB323C] group-hover:text-[#AB323C]" />
                </button>

                <button
                    onClick={next}
                    className="w-12 h-12 rounded-full bg-[#AB323C] flex items-center justify-center hover:bg-[#AB323C] transition-colors group hover:cursor-pointer text-white"
                >
                    <ChevronRightIcon className="w-5 h-5 text-white" />
                </button>
            </div>
        </div>
    );
}
