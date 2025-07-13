
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
import CardComponent from "@/components/card/CardComponent";
import {ArrowUpRightIcon} from "@heroicons/react/24/solid";
import Footer from "@/components/Footer";
import SubFooter from "@/components/SubFooter";
import CardImageOne from "@/assets/images/card_img1.png"
import CardImageTwo from "@/assets/images/card_img2.png"
import CardImageThree from "@/assets/images/card_img3.png"


export default async function Page() {
    const t = await getT();
    return (
        <main>
            <SectionCardLayout
                className="container"
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
                            icon={<RightArrow className="size-5"/>}
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
                            className="object-fill h-full w-full rounded-xl"
                        />
                    </div>
                </SectionCardContainer>
            </SectionCardLayout>

            {/*###########*/}

            <div className='bg-secondary-bg'>
                <SectionCardLayout
                    className="container"
                >
                    <SectionCardContainer
                        space='rightSpace'
                    >
                        <div className="relative h-[475px] w-full overflow-hidden">
                            <Image
                                src={CardImageThree}
                                alt="Bird"
                                fill
                                className="object-fill h-full w-full rounded-xl"
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
                                icon={<RightArrow className="size-5"/>}
                                iconPosition="right"
                                variant="outline"
                            >
                                {t('start')}
                            </Button>
                        </SectionCardDescription>

                    </SectionCardContainer>
                </SectionCardLayout>
            </div>


            {/*Card Section*/}
            {/*############*/}

            <SectionCardLayout
                className="container"
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
                            icon={<ArrowUpRightIcon className="w-4 h-4"/>}
                            iconPosition='right'
                        >
                            <span>{t('start')}</span>
                        </Button>
                    </div>
                </div>

                <SectionCardContainer>
                    <CardComponent
                        className="w-[396px] h-[528px] text-center flex flex-col items-center justify-center">
                        <div className="relative h-[475px] w-full overflow-hidden">
                            <Image
                                src={CardImageOne}
                                alt="Image"
                                fill
                                className="object-fill h-full w-full rounded-xl"
                            />
                        </div>
                        <div>
                            <SubHeading className="mb-6">
                                {t('add_inventory')}
                            </SubHeading>
                            <Text className="mb-8">
                                {t('sub_add_inventory')}
                            </Text>
                        </div>
                    </CardComponent>
                </SectionCardContainer>

            </SectionCardLayout>


            {/*#############*/}

            <SectionCardLayout
                className="container "
            >

                <Heading className="mb-4 text-center">{t('pharmacy_guideline')}</Heading>
                <Text className="mb-12 text-center">{t('sub_pharmacy_guideline')}</Text>

                <SectionCardContainer space='rightSpace'>
                    <CardComponent
                        className="w-[396px] h-[528px] text-center flex flex-col items-center justify-center">
                        <div className="relative h-[475px] w-full overflow-hidden">
                            <Image
                                src={CardImageTwo}
                                alt="Bird"
                                fill
                                className="object-fill h-full w-full rounded-xl"
                            />
                        </div>
                        <div>

                            <SubHeading className="mb-6">
                                {t('add_inventory')}
                            </SubHeading>
                            <Text className="mb-8">
                                {t('sub_add_inventory')}
                            </Text>
                        </div>
                    </CardComponent>
                </SectionCardContainer>

                <div className="flex justify-center">
                    <Button
                        as='Link'
                        href="/get-started"
                        icon={<ArrowUpRightIcon className="w-4 h-4"/>}
                        iconPosition='right'
                    >
                        <span>{t('start')}</span>
                    </Button>
                </div>
            </SectionCardLayout>


            {/*footer*/}

            <SubFooter/>

            <Footer/>


        </main>
    );
}