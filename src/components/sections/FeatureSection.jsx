import React from 'react';
import SectionCardLayout from '@/components/SectionCard/SectionCardLayout';
import FeatureCard from '@/components/card/FeatureCard';
import CardButton from '@/components/ui/CardButton';
import { ArrowRightIcon } from 'lucide-react';

const FeatureSection = ({ t }) => {
    const features = [
        {
            id: 'time-save',
            icon: (
                <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            title: 'সময় বাঁচান',
            description: 'আপনার আ্যাকাউন্ট তৈরি করুন এবং আপনার ফোর্মাসিন সেট আপ করুন'
        },
        {
            id: 'stay-organized',
            icon: (
                <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                </svg>
            ),
            title: 'সংগঠিত থাকুন',
            description: 'সিনটেক্স আপনার সম্পত্তি এবং তাদের বিবরণ যোগ করুন'
        },
        {
            id: 'invite-welcome',
            icon: (
                <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                </svg>
            ),
            title: 'অভ্যর্থিত আয়কোস করুন',
            description: 'আপনার ডাক্তারের প্রটিফর্মে যোগাদানের জন্য আমন্ত্রণ জানান'
        }
    ];

    return (
        <SectionCardLayout className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>

            <div className="flex justify-center">
                <CardButton
                    as="Link"
                    href="/get-started"
                    icon={<ArrowRightIcon className="w-4 h-4" />}
                    iconPosition="right"
                    variant="outline"
                    className="rounded-full"
                >
                    ফ্রি ডেমো দেখুন
                </CardButton>
            </div>
        </SectionCardLayout>
    );
};

export default FeatureSection;
