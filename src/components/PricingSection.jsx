import React from 'react';

const PricingSection = () => {
    const pricingPlans = [
        {
            id: 'basic',
            title: 'মৌলিক',
            subtitle: 'ম্যানেজমেন্ট অভ্যাসকারীদের জন্য উপযুক্ত',
            price: '৳২৯',
            period: '/মাস',
            features: [
                { text: 'সর্বোচ্চ ১০টি প্রপার্টি', included: true },
                { text: 'বেসিক ভাড়াটে ব্যবস্থাপনা', included: false },
                { text: 'ইমেল সহায়তা', included: false }
            ],
            buttonType: 'outline',
            badge: null
        },
        {
            id: 'professional',
            title: 'পেশাদার',
            subtitle: 'ক্রমবর্ধমান ব্যবসার জন্য আদর্শ',
            price: '৳৭৯',
            period: '/মাস',
            features: [
                { text: '৫০টি পর্যন্ত সম্পত্তি', included: true },
                { text: 'উন্নত ভাড়াটে ব্যবস্থাপনা', included: true },
                { text: 'আর্থিক প্রতিবেদন', included: true },
                { text: 'অগ্রাধিকার সহায়তা', included: true }
            ],
            buttonType: 'filled',
            badge: 'জনপ্রিয়'
        },
        {
            id: 'enterprise',
            title: 'এন্টারপ্রাইজ',
            subtitle: 'ক্রমবর্ধমান ব্যবসার জন্য আদর্শ',
            price: 'কাস্টম',
            period: null,
            features: [
                { text: '৫০টি পর্যন্ত সম্পত্তি', included: true },
                { text: 'উন্নত ডাটাবেট ব্যবস্থাপনা', included: true },
                { text: 'আর্থিক প্রতিবেদন', included: true },
                { text: 'অগ্রাধিকার সহায়তা', included: true }
            ],
            buttonType: 'outline',
            badge: null
        }
    ];

    const CheckIcon = () => (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
            />
        </svg>
    );

    const CrossIcon = () => (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>
    );

    return (
        <div className="bg-gray-50 py-8 md:py-16">
            <div className="container mx-auto px-4">
                {/* Mobile-first approach with responsive grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`
                                relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow
                                w-full flex flex-col gap-5 md:gap-7
                                pt-8 pb-8 px-6
                                ${plan.badge ? 'border-2 border-[#AB323C]' : ''}
                                mb-6 md:mb-0
                            `}
                        >
                            {/* Popular Badge */}
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-[#AB323C] text-white px-6 py-2 rounded-full text-sm font-semibold">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            {/* Header */}
                            <div className={`text-center ${plan.badge ? 'pt-4' : ''}`}>
                                <h3
                                    className="font-['Noto_Sans_Bengali_UI'] font-bold text-xl md:text-2xl leading-[150%] text-[#2D2D34] mb-2"
                                >
                                    {plan.title}
                                </h3>
                                <p
                                    className="font-['Noto_Sans_Bengali_UI'] font-normal text-sm md:text-base leading-[150%] text-[#494A57] mb-4 md:mb-6"
                                >
                                    {plan.subtitle}
                                </p>
                                <div className="mb-4 md:mb-6">
                                    <span
                                        className="font-['Noto_Sans_Bengali_UI'] font-bold text-2xl md:text-[26px] leading-[150%] text-[#2D2D34]"
                                    >
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="font-['Noto_Sans_Bengali_UI'] font-normal text-sm md:text-base leading-[150%] text-[#494A57] ml-1 md:ml-2">
                                            {plan.period}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="space-y-3 md:space-y-4 flex-grow">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div
                                            className={`
                                                w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                                                ${feature.included
                                                    ? 'bg-[#AB323C] text-white'
                                                    : 'bg-[#596780] text-white'
                                                }
                                            `}
                                        >
                                            {feature.included ? <CheckIcon /> : <CrossIcon />}
                                        </div>
                                        <span
                                            className={`
                                                font-['Noto_Sans_Bengali_UI'] font-normal text-sm md:text-base leading-[150%]
                                                ${feature.included ? 'text-[#494A57]' : 'text-gray-400'}
                                            `}
                                        >
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <button
                                className={`
                                    w-full h-10 md:h-12 rounded-xl font-['Noto_Sans_Bengali_UI'] font-semibold text-sm md:text-base leading-[150%] transition-colors
                                    py-2 md:py-3 px-4 md:px-6 border mt-4 md:mt-6
                                    ${plan.buttonType === 'filled'
                                        ? 'bg-[#AB323C] text-white border-[#AB323C] hover:bg-[#8B2832]'
                                        : 'bg-white text-[#AB323C] border-[#AB323C] hover:bg-red-50'
                                    }
                                `}
                            >
                                শুরু করুন
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
