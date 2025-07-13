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
        <SectionCardLayout className="container">
            <div className="bg-primary rounded-3xl px-6 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        {/* Left side - Avatars and SubHeading */}
                        <div className="flex flex-col space-y-4">
                            <AvatarGroup avatars={avatars} maxVisible={5} />
                            <SubHeading className="text-white text-center sm:text-left">
                                {t('subscription_pharmacy')}
                            </SubHeading>
                        </div>

                        {/* Right side - Button */}
                        <CardButton
                            as="Button"
                            href="/get-started"
                            icon={<ArrowRightIcon className="w-4 h-4" />}
                            iconPosition="right"
                            variant="outline"
                        >
                            <span>{t("free_trail")}</span>
                        </CardButton>
                    </div>
                </div>
            </div>
        </SectionCardLayout>
    );
};

export default SubFooter;
