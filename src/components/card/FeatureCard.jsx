import React from 'react';
import Heading from '@/components/typography/Heading';
import Text from '@/components/typography/Text';

const FeatureCard = ({ icon, title, description, className = '' }) => {
    return (
        <div className={`flex flex-row gap-6 items-start ${className}`}>
            {/* Icon on the left */}
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                {icon}
            </div>

            {/* Content on the right */}
            <div className="flex flex-col items-start flex-1">
                <Heading className="mb-4 text-[#1B1D2D] text-[24px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                    {title}
                </Heading>
                <Text className="text-[#494A57] text-left text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI']">
                    {description}
                </Text>
            </div>
        </div>
    );
};

export default FeatureCard;
