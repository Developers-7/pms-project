import { getT } from "@/i18n/server";
import SectionCardLayout from "@/components/SectionCard/SectionCardLayout";
import Heading from "@/components/typography/Heading";
import SubHeading from "@/components/typography/SubHeading";
import SectionCardContainer from "@/components/SectionCard/SectionCardContainer";
import SectionCardDescription from "@/components/SectionCard/SectionCardDescription";
import Text from "@/components/typography/Text";
import Button from "@/components/ui/Button";
import CardButton from "@/components/ui/CardButton";
import { RightArrow } from "next/dist/client/components/react-dev-overlay/ui/icons/right-arrow";
import Image from "next/image";
import CardComponent from "@/components/card/CardComponent";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/Footer";
import SubFooter from "@/components/SubFooter";
import CardImageOne from "@/assets/images/card_img1.png";
import CardImageTwo from "@/assets/images/card_img2.png";
import CardImageThree from "@/assets/images/card_img3.png";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import PricingSection from "@/components/PricingSection";
import FeatureSection from "@/components/sections/FeatureSection";
import { ArrowRightIcon } from "lucide-react";

export default async function Page() {
    const t = await getT();
    return (
        <main>
            <SectionCardLayout className="container">
                <div>
                    <Heading className="text-center mb-6 text-black text-[48px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                        {t("need_to_manage_pharmacy")}
                    </Heading>
                    <SubHeading className="text-center text-[#494A57] text-[20px] font-medium leading-[160%] font-['Noto_Sans_Bengali_UI']">
                        {t("mobile_app")}
                    </SubHeading>
                </div>
                <SectionCardContainer>
                    <SectionCardDescription>
                        <Heading className="mb-4 text-black text-[32px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                            {t("inventory_management")}
                        </Heading>
                        <Text className="mb-8 text-[#494A57] text-[16px] font-normal leading-[180%] font-['Noto_Sans_Bengali_UI']">
                            {t("sub_heading")}
                        </Text>
                        <Button
                            icon={<RightArrow className="size-5" />}
                            iconPosition="right"
                            variant="outline"
                        >
                            {t("start")}
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
            <div className="bg-secondary-bg">
                <SectionCardLayout className="container">
                    <SectionCardContainer space="rightSpace">
                        <div className="relative h-[475px] w-full overflow-hidden">
                            <Image
                                src={CardImageThree}
                                alt="Bird"
                                fill
                                className="object-fill h-full w-full rounded-xl"
                            />
                        </div>
                        <SectionCardDescription>
                            <Heading className="mb-4 text-black text-[32px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                                {t("inventory_management")}
                            </Heading>
                            <Text className="mb-8 text-[#494A57] text-[16px] font-normal leading-[180%] font-['Noto_Sans_Bengali_UI']">
                                {t("sub_heading")}
                            </Text>
                            <Button
                                icon={<RightArrow className="size-5" />}
                                iconPosition="right"
                                variant="outline"
                            >
                                {t("start")}
                            </Button>
                        </SectionCardDescription>
                    </SectionCardContainer>
                </SectionCardLayout>
            </div>
            <SectionCardLayout className="container">
                <SectionCardContainer>
                    <SectionCardDescription>
                        <Heading className="mb-4 text-black text-[32px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                            {t("inventory_management")}
                        </Heading>
                        <Text className="mb-8 text-[#494A57] text-[16px] font-normal leading-[180%] font-['Noto_Sans_Bengali_UI']">
                            {t("sub_heading")}
                        </Text>
                        <Button
                            icon={<RightArrow className="size-5" />}
                            iconPosition="right"
                            variant="outline"
                        >
                            {t("start")}
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
            {/*Card Section*/}
            <SectionCardLayout className="container">
                <div className="flex justify-between">
                    <div>
                        <Heading className="mb-6 text-black text-[48px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                            {t("how_to_help")}
                        </Heading>
                        <Text className="mb-8 text-[#494A57] text-[20px] font-normal leading-[100%] font-['Noto_Sans_Bengali_UI']">
                            {t("start_with_platform")}
                        </Text>
                    </div>

                    <div>
                        <CardButton
                            as="Link"
                            href="/get-started"
                            icon={<ArrowUpRightIcon className="w-4 h-4" />}
                            iconPosition="right"
                            variant="primary"
                        >
                            <span>{t("start")}</span>
                        </CardButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <CardComponent className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="relative h-[240px] w-full overflow-hidden mb-6">
                            <Image
                                src={CardImageOne}
                                alt="Sign Up & Setup"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <div className="text-left">
                            <SubHeading className="mb-4 text-black text-[24px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                                {t("add_inventory")}
                            </SubHeading>
                            <Text className="text-[#494A57] text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI']">
                                {t("sub_add_inventory")}
                            </Text>
                        </div>
                    </CardComponent>

                    {/* Card 2 */}
                    <CardComponent className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="relative h-[240px] w-full overflow-hidden mb-6">
                            <Image
                                src={CardImageTwo}
                                alt="Inventory Management"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <div className="text-left">
                            <SubHeading className="mb-4 text-black text-[24px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                                {t("inventory_management")}
                            </SubHeading>
                            <Text className="text-[#494A57] text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI']">
                                {t("sub_heading")}
                            </Text>
                        </div>
                    </CardComponent>

                    {/* Card 3 */}
                    <CardComponent className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="relative h-[240px] w-full overflow-hidden mb-6">
                            <Image
                                src={CardImageThree}
                                alt="Reports & Analytics"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <div className="text-left">
                            <SubHeading className="mb-4 text-black text-[24px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                                যোগাযোগ থাকুন, সহজেই ন্যানেজ
                            </SubHeading>
                            <Text className="text-[#494A57] text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI']">
                                আপনার আ্যাকাউন্ট তৈরি করুন এবং আপনার ফোর্মাসিন
                                সেট আপ করুন
                            </Text>
                        </div>
                    </CardComponent>
                </div>
            </SectionCardLayout>
            {/* Feature Section */}
            <FeatureSection t={t} />
            {/* Centered Button */}
            <SectionCardLayout className="container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Mobile App Mockup */}
                    <div className="relative h-[500px] w-full overflow-hidden">
                        <Image
                            src="/assets/background_1.jpg"
                            alt="Mobile App Mockup"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="flex flex-col gap-4">
                        <Heading className="text-black text-[48px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                            আপনার ফার্মেসি এখন হাতের মুঠোয়
                        </Heading>

                        <Text className="text-[#494A57] text-[18px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI'] mb-8 mt-4">
                            ডেস্কটপটি ফার্মেসি ম্যানেজমেন্ট সফটওয়্যারের মাধ্যমে
                            তথ্য ক্রয়, বিক্রয় হিসাব, কোন তথ্য, কোন সরবরাহকারীর
                            কাছ থেকে আপনি কত পরিমাণ তথ্য কিনেছেন। সরবরাহকারীকে
                            কত টাকা পরিশোধ করা হয়েছে, বকেয়া বকেয়া, গ্রাহকের
                            কাছে কত তথ্য বিক্রি হয়েছে, কত তথ্য বিক্রি হয়েছে,
                            গ্রাহকের কাছে বকেয়া বকেয়া সব হিসার সম্পূর্ণ
                            আ্যাকাউন্ট রাখা যেতে পারে। অভ্যন্তরীণ, ইনভেন্টরি
                            ব্যবস্থাপনার মাধ্যমে, আপনি আপনার স্টকে থাকা সমস্ত
                            তথ্যের বর্তমান অবস্থা জানতে পারবেন।
                        </Text>

                        {/* App Store Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#" className="inline-block">
                                <img
                                    src="/icons/play_store_icon.png"
                                    alt="Get it on Google Play"
                                    className="h-14 w-auto"
                                />
                            </a>
                            <a href="#" className="inline-block">
                                <img
                                    src="/icons/apple_store_icon.png"
                                    alt="Download on the App Store"
                                    className="h-14 w-auto"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </SectionCardLayout>{" "}
            {/* Testimonial Carousel */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <TestimonialCarousel />
                </div>
            </div>
            <PricingSection />
            {/* Hero Banner Section */}
            <div className="relative w-full h-[800px] overflow-hidden">
                <Image
                    src="/assets/background_1.jpg"
                    alt="Pharmacy Management"
                    fill
                    className="object-cover"
                />
                {/* Centered content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-white text-[36px] md:text-[48px] font-bold leading-[120%] font-['Noto_Sans_Bengali_UI'] mb-4 max-w-4xl drop-shadow-lg">
                        পরীক্ষা করে দেখুন, আপনার ফার্মেসি ম্যানেজমেন্ট কতটা সহজ
                        হয়
                    </h2>

                    {/* CTA Button */}
                    <CardButton
                        as="Button"
                        href="/get-started"
                        icon={<ArrowRightIcon className="w-4 h-4" />}
                        iconPosition="right"
                        variant="primary"
                    >
                        <span>{t("start")}</span>
                    </CardButton>
                </div>
            </div>
            {/*Card Section*/}
            <SectionCardLayout className="container">
                <div className="flex justify-between">
                    <div>
                        <Heading className="mb-6 text-black text-[48px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                            {t("how_to_help")}
                        </Heading>
                        <Text className="mb-8 text-[#494A57] text-[20px] font-normal leading-[100%] font-['Noto_Sans_Bengali_UI']">
                            {t("start_with_platform")}
                        </Text>
                    </div>

                    <div>
                        <CardButton
                            as="Link"
                            href="/get-started"
                            icon={<ArrowUpRightIcon className="w-4 h-4" />}
                            iconPosition="right"
                            variant="primary"
                        >
                            <span>{t("start")}</span>
                        </CardButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <CardComponent className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="relative h-[240px] w-full overflow-hidden mb-6">
                            <Image
                                src={CardImageOne}
                                alt="Sign Up & Setup"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <div className="text-left">
                            <SubHeading className="mb-4 text-black text-[24px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                                {t("add_inventory")}
                            </SubHeading>
                            <Text className="text-[#494A57] text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI']">
                                {t("sub_add_inventory")}
                            </Text>
                            <div className="mt-4 flex items-center gap-2 cursor-pointer group transition-colors duration-200 hover:text-[#AB323C]">
                                <span className="text-[#494A57] text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI'] group-hover:text-[#AB323C] transition-colors duration-200">
                                    ব্লগ পড়ুন
                                </span>
                                <ArrowRightIcon className="w-4 h-4 text-[#494A57] group-hover:text-[#AB323C] transition-colors duration-200" />
                            </div>
                        </div>
                    </CardComponent>

                    {/* Card 2 */}
                    <CardComponent className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="relative h-[240px] w-full overflow-hidden mb-6">
                            <Image
                                src={CardImageTwo}
                                alt="Inventory Management"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <div className="text-left">
                            <SubHeading className="mb-4 text-black text-[24px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                                {t("inventory_management")}
                            </SubHeading>
                            <Text className="text-[#494A57] text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI']">
                                {t("sub_heading")}
                            </Text>
                            <div className="mt-4 flex items-center gap-2 cursor-pointer group transition-colors duration-200 hover:text-[#AB323C]">
                                <span className="text-[#494A57] text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI'] group-hover:text-[#AB323C] transition-colors duration-200">
                                    ব্লগ পড়ুন
                                </span>
                                <ArrowRightIcon className="w-4 h-4 text-[#494A57] group-hover:text-[#AB323C] transition-colors duration-200" />
                            </div>
                        </div>
                    </CardComponent>

                    {/* Card 3 */}
                    <CardComponent className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="relative h-[240px] w-full overflow-hidden mb-6">
                            <Image
                                src={CardImageThree}
                                alt="Reports & Analytics"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <div className="text-left">
                            <SubHeading className="mb-4 text-black text-[24px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                                যোগাযোগ থাকুন, সহজেই ন্যানেজ
                            </SubHeading>
                            <Text className="text-[#494A57] text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI']">
                                আপনার আ্যাকাউন্ট তৈরি করুন এবং আপনার ফোর্মাসিন
                                সেট আপ করুন
                            </Text>
                            <div className="mt-4 flex items-center gap-2 cursor-pointer group transition-colors duration-200 hover:text-[#AB323C]">
                                <span className="text-[#494A57] text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI'] group-hover:text-[#AB323C] transition-colors duration-200">
                                    ব্লগ পড়ুন
                                </span>
                                <ArrowRightIcon className="w-4 h-4 text-[#494A57] group-hover:text-[#AB323C] transition-colors duration-200" />
                            </div>
                        </div>
                    </CardComponent>
                </div>
            </SectionCardLayout>
            {/*footer*/}
            <SubFooter />
            <Footer />
        </main>
    );
}
