import React from 'react';
import Text from '@/components/typography/Text';
import SubHeading from '../typography/SubHeading';

const SecondaryCard = ({ image, heading, description, className = '' }) => {
    return (
        <div className={`flex flex-col gap-6 items-center ${className}`}>
            {/* image on the top */}
            <div className="relative h-[240px] w-full overflow-hidden mb-6">
                <Image
                    src={image}
                    alt="Sign Up & Setup"
                    fill
                    className="object-cover rounded-xl"
                />
            </div>

            {/* Content on the bottom */}
            <div className="text-left">
                <SubHeading className="mb-4 text-black text-[24px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                    {heading}
                </SubHeading>
                <Text className="text-[#494A57] text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI']">
                    {description}
                </Text>
            </div>
        </div>
    );
};

export default SecondaryCard;
