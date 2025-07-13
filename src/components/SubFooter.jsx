/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 10 Jul 2025
 * Time: 4:15 PM
 * Email: zishan.softdev@gmail.com
 */


import React from 'react';
import { getT } from '@/i18n/server';
import SectionCardLayout from "@/components/SectionCard/SectionCardLayout";
import SectionCardContainer from "@/components/SectionCard/SectionCardContainer";
import AvatarGroup from "@/components/typography/AvatarGroup";
import SubHeading from "@/components/typography/SubHeading";
import Button from "@/components/ui/Button";

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
        <SectionCardLayout className="container">
            <SectionCardContainer className="bg-primary rounded-3xl px-6 py-8">
                <div className="max-w-6xl mx-auto space-y-6">
                    {/* Avatars */}
                    <AvatarGroup avatars={avatars} maxVisible={5} />

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <SubHeading className="text-white text-center sm:text-left">
                            {t('subscription_pharmacy')}
                        </SubHeading>

                        <Button
                            variant="ghost"
                            className="bg-white text-primary hover:bg-gray-100"
                        >
                            {t('free_trail')}
                        </Button>
                    </div>
                </div>
            </SectionCardContainer>
        </SectionCardLayout>
    );
};

export default SubFooter;
