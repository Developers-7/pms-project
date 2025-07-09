import {fetchSampleData} from '@/features/navbar/services/sampleApi';
import {getT} from '@/i18n/server';
import SectionCardLayout from "@/components/SectionCard/SectionCardLayout";
import Heading from "@/components/typography/Heading";
import SubHeading from "@/components/typography/SubHeading";
import SectionCardContainer from "@/components/SectionCard/SectionCardContainer";
import SectionCardDescription from "@/components/SectionCard/SectionCardDescription";
import Text from "@/components/typography/Text";
import Button from "@/components/ui/Button";
import {RightArrow} from "next/dist/client/components/react-dev-overlay/ui/icons/right-arrow";
import Image from "next/image";
import ImageCard from "@/components/card/CardComponent"
import CardComponent from "@/components/card/CardComponent";
import {ArrowUpRightIcon} from "@heroicons/react/24/solid";

export default async function Page() {
    const t = await getT();
    const data = await fetchSampleData();

    return (
        <main>
            <SectionCardLayout
            >
                <div>
                    <Heading className="text-center mb-6">
                        {t('need_to_manage_pharmacy')}
                    </Heading>
                    <SubHeading className="text-center">
                        {t('mobile_app')}
                    </SubHeading>
                </div>
                <SectionCardContainer>
                    <SectionCardDescription>
                        <Heading className="mb-4">
                            {t('inventory_management')}
                        </Heading>
                        <Text className="mb-8">
                            {t('sub_heading')}
                        </Text>
                        <Button
                            icon={<RightArrow className="size-5" />}
                            iconPosition="right"
                            variant="outline"
                        >
                            {t('start')}
                        </Button>
                    </SectionCardDescription>

                    <div className="relative h-[475px] w-full overflow-hidden">
                        <Image
                            src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                            alt="Bird"
                            fill
                            className="object-cover h-full w-full rounded-xl"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                    </div>
                </SectionCardContainer>
            </SectionCardLayout>

            <SectionCardLayout
                className="bg-[#FAFAFA] "
            >
                <SectionCardContainer className="flex flex-col lg:flex-row justify-between gap-9">
                    <div className="relative h-[475px] w-full overflow-hidden">
                        <Image
                            src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                            alt="Bird"
                            fill
                            className="object-cover h-full w-full rounded-xl"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                    </div>
                    <SectionCardDescription>
                        <Heading className="mb-4">
                            {t('inventory_management')}
                        </Heading>
                        <Text className="mb-8">
                            {t('sub_heading')}
                        </Text>
                        <Button
                            icon={<RightArrow className="size-5" />}
                            iconPosition="right"
                            variant="outline"
                        >
                            {t('start')}
                        </Button>
                    </SectionCardDescription>

                </SectionCardContainer>
            </SectionCardLayout>

            {/*<CardComponent className="w-[215px] h-[168px] text-center flex flex-col items-center justify-between">*/}
            {/*    <Image*/}
            {/*        src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"*/}
            {/*        alt="Upload"*/}
            {/*        width={64}*/}
            {/*        height={64}*/}
            {/*        className="mb-2"*/}
            {/*    />*/}
            {/*    <div>*/}
            {/*        <h3 className="text-sm font-bold mb-1">আপনার ইনভেন্টরি যুক্ত করুন</h3>*/}
            {/*        <p className="text-xs text-gray-500">*/}
            {/*            আপনার অ্যাসেটটি তৈরি করুন এবং আপনার প্রোফাইল তাতে যুক্ত করুন*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</CardComponent>*/}


            {/*Card Section*/}

            <SectionCardLayout
                className="bg-[#CCFFFF]"
            >
                <div className="flex justify-between">
                    <div>
                        <Heading className="mb-6">
                            {t('how_to_help')}
                        </Heading>
                        <Text className="mb-8">
                            {t('start_with_platform')}
                        </Text>
                    </div>

                    <div>
                        <Button
                            as='Link'
                            href="/get-started"
                            icon={<ArrowUpRightIcon className="w-4 h-4" />}
                            iconPosition='right'
                        >
                            <span>{t('start')}</span>
                        </Button>
                    </div>

                </div>
                <SectionCardContainer className="flex flex-col lg:flex-row justify-between gap-9">

                    <CardComponent className="w-[396px] h-[528px] text-center flex flex-col items-center justify-center">
                        <Image
                            src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                            alt="Upload"
                            width={368}
                            height={250}
                            className="mb-2"
                        />
                        <div>
                            <h3 className="text-sm font-bold mb-1">আপনার ইনভেন্টরি যুক্ত করুন</h3>
                            <p className="text-xs text-gray-500">
                                আপনার অ্যাসেটটি তৈরি করুন এবং আপনার প্রোফাইল তাতে যুক্ত করুন
                            </p>
                        </div>
                    </CardComponent>

                </SectionCardContainer>
            </SectionCardLayout>



        </main>
);
}