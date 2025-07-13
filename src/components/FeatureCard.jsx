'use client';

import React from 'react';
import Image from 'next/image';
import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import Button from "@/components/ui/Button";
import { RightArrow } from "next/dist/client/components/react-dev-overlay/ui/icons/right-arrow";

const FeatureCard = ({
    title,
    description,
    buttonText,
    imageUrl,
    imageAlt = "Feature Image",
    imagePosition = "right" // can be "left" or "right"
}) => {
    return (
        <div className="w-full">
            {/* Simplified responsive approach using a single grid with responsive ordering */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div
                    className={`
            flex flex-col 
            ${imagePosition === "right" ? "lg:order-first order-last" : "lg:order-last order-last"}
          `}
                >
                    <Heading className="mb-4 text-[#000000] text-2xl md:text-3xl lg:text-[32px] font-semibold leading-tight">
                        {title}
                    </Heading>
                    <Text className="mb-6 md:mb-8 text-[#494A57] text-base leading-relaxed">
                        {description}
                    </Text>
                    <Button
                        icon={<RightArrow className="size-5" />}
                        iconPosition="right"
                        variant="outline"
                    >
                        {buttonText}
                    </Button>
                </div>

                {/* Image - always first on mobile, position based on prop for desktop */}
                <div
                    className={`
            relative h-[250px] md:h-[350px] lg:h-[475px] w-full overflow-hidden
            ${imagePosition === "right" ? "lg:order-last order-first" : "lg:order-first order-first"}
          `}
                >
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-cover h-full w-full rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
