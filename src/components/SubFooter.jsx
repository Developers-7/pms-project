import React from 'react';
import { getT } from '@/i18n/server';
import SectionCardLayout from "@/components/SectionCard/SectionCardLayout";
import AvatarGroup from "@/components/typography/AvatarGroup";
import SubHeading from "@/components/typography/SubHeading";
import CardButton from './ui/CardButton';
import { ArrowRightIcon } from 'lucide-react';

const SubFooter = async () => {
    const t = await getT();

    const avatars = [
        '/docs/images/people/profile-picture-5.jpg',
        '/docs/images/people/profile-picture-2.jpg',
        '/docs/images/people/profile-picture-3.jpg',
        '/docs/images/people/profile-picture-4.jpg',
        '/docs/images/people/profile-picture-1.jpg',
        '/docs/images/people/profile-picture-5.jpg',
        '/docs/images/people/profile-picture-2.jpg',
        '/docs/images/people/profile-picture-3.jpg',
        '/docs/images/people/profile-picture-4.jpg',
        '/docs/images/people/profile-picture-1.jpg'
    ];

    return (
        <div className="bg-primary rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-6 sm:py-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    {/* Left side - Avatars and SubHeading */}
                    <div className="flex flex-col space-y-4 w-full sm:w-auto">
                        <div className="overflow-x-auto w-full pb-1">
                            <AvatarGroup avatars={avatars} maxVisible={5} />
                        </div>
                        <SubHeading className="text-white text-left text-base sm:text-lg max-w-[90%] sm:max-w-none">
                            {t('subscription_pharmacy')}
                        </SubHeading>
                    </div>

                    {/* Right side - Button */}
                    <div className="w-full sm:w-auto mt-2 sm:mt-0">
                        <CardButton
                            as="Button"
                            href="/get-started"
                            icon={<ArrowRightIcon className="w-4 h-4" />}
                            iconPosition="right"
                            variant="outline"
                            className="w-full sm:w-auto whitespace-nowrap py-2.5 px-4 sm:px-6 text-sm sm:text-base bg-white text-[#AB323C] hover:bg-gray-100 border-white"
                        >
                            <span>{t("free_trail")}</span>
                        </CardButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubFooter;
