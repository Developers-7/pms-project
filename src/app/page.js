import { getT } from "@/i18n/server";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { RightArrow } from "next/dist/client/components/react-dev-overlay/ui/icons/right-arrow";

// Layout components
import SectionCardLayout from "@/components/SectionCard/SectionCardLayout";
import SectionCardContainer from "@/components/SectionCard/SectionCardContainer";
import SectionCardDescription from "@/components/SectionCard/SectionCardDescription";
import Footer from "@/components/Footer";
import SubFooter from "@/components/SubFooter";
import FeatureCard from "@/components/FeatureCard";

// UI components
import Heading from "@/components/typography/Heading";
import SubHeading from "@/components/typography/SubHeading";
import Text from "@/components/typography/Text";
import Button from "@/components/ui/Button";
import CardButton from "@/components/ui/CardButton";
import CardComponent from "@/components/card/CardComponent";

// Feature components
import TestimonialCarousel from "@/components/TestimonialCarousel";
import PricingSection from "@/components/PricingSection";
import FeatureSection from "@/components/sections/FeatureSection";

// Images
import CardImageOne from "@/assets/images/card_img1.png";
import CardImageTwo from "@/assets/images/card_img2.png";
import CardImageThree from "@/assets/images/card_img3.png";

export default async function Page() {
    const t = await getT();

    return (
        <main className="min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="mb-16 md:mb-24">
                <SectionCardLayout className="container">
                    <div className="mb-8 md:mb-12">
                        <Heading className="text-center mb-6 text-[#000000] text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight">
                            {t("need_to_manage_pharmacy")}
                        </Heading>
                        <SubHeading className="text-center text-[#494A57] text-lg md:text-xl lg:text-[20px] font-medium leading-relaxed max-w-2xl mx-auto">
                            {t("mobile_app")}
                        </SubHeading>
                    </div>
                    <FeatureCard
                        title={t("inventory_management")}
                        description={t("sub_heading")}
                        buttonText={t("start")}
                        imageUrl="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                        imageAlt="Inventory Management"
                        imagePosition="right"
                    />
                </SectionCardLayout>
            </section>

            {/* More sections will follow */}

            {/* Feature Section with Right-aligned Image */}
            <section className="py-12 md:py-16 bg-secondary-bg">
                <SectionCardLayout className="container">
                    <FeatureCard
                        title={t("inventory_management")}
                        description={t("sub_heading")}
                        buttonText={t("start")}
                        imageUrl={CardImageThree.src}
                        imageAlt="Feature Image"
                        imagePosition="left"
                    />
                </SectionCardLayout>
            </section>

            {/* Feature Section with Left-aligned Image */}
            <section className="py-12 md:py-16">
                <SectionCardLayout className="container">
                    <FeatureCard
                        title={t("inventory_management")}
                        description={t("sub_heading")}
                        buttonText={t("start")}
                        imageUrl="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                        imageAlt="Feature Image"
                        imagePosition="right"
                    />
                </SectionCardLayout>
            </section>

            {/*Card Section*/}
            <SectionCardLayout className="container">
                <div className="flex flex-col lg:flex-row justify-between">
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

            {/* Mobile App Section */}
            <section className="py-12 md:py-16">
                <SectionCardLayout className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden order-last lg:order-first">
                            <Image
                                src="/assets/background_1.jpg"
                                alt="Mobile App Mockup"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <Heading className="text-[#000000] text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight">
                                আপনার ফার্মেসি এখন হাতের মুঠোয়
                            </Heading>

                            <Text className="text-[#494A57] text-base md:text-lg mt-4 mb-8 leading-relaxed">
                                ডেস্কটপটি ফার্মেসি ম্যানেজমেন্ট সফটওয়্যারের
                                মাধ্যমে তথ্য ক্রয়, বিক্রয় হিসাব, কোন তথ্য, কোন
                                সরবরাহকারীর কাছ থেকে আপনি কত পরিমাণ তথ্য
                                কিনেছেন। সরবরাহকারীকে কত টাকা পরিশোধ করা হয়েছে,
                                বকেয়া বকেয়া, গ্রাহকের কাছে কত তথ্য বিক্রি
                                হয়েছে, কত তথ্য বিক্রি হয়েছে, গ্রাহকের কাছে
                                বকেয়া বকেয়া সব হিসার সম্পূর্ণ আ্যাকাউন্ট রাখা
                                যেতে পারে। অভ্যন্তরীণ, ইনভেন্টরি ব্যবস্থাপনার
                                মাধ্যমে, আপনি আপনার স্টকে থাকা সমস্ত তথ্যের
                                বর্তমান অবস্থা জানতে পারবেন।
                            </Text>

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
                </SectionCardLayout>
            </section>
            {/* Testimonials Section */}
            <div>
                <SectionCardLayout className="container ">
                    <div className="text-center mb-8">
                        <Heading className="mb-4 text-[#2D2D34] text-2xl md:text-3xl lg:text-[48px] font-semibold leading-tight">
                            ৫০০+ কাস্টমারের মন্তব্য
                        </Heading>
                        <Text className="text-[#494A57] text-base md:text-lg lg:text-[20px]">
                            হাজার হাজার সন্তুষ্ট সম্পত্তি পরিচালকদের সাথে যোগ
                            দিন
                        </Text>
                    </div>
                    <section className="py-12 md:py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <TestimonialCarousel />
                        </div>
                    </section>
                </SectionCardLayout>
            </div>

            {/* Pricing Section */}
            <div className="bg-[#FAFAFA]">
                <SectionCardLayout className="container ">
                    <div className="text-center mb-8">
                        <Heading className="mb-4 text-[#2D2D34] text-2xl md:text-3xl lg:text-[48px] font-semibold leading-tight">
                            দেশের সবচেয়ে আধুনিক অ্যাপ, আপনার হাতের নাগালে
                        </Heading>
                        <Text className="text-[#494A57] text-base md:text-lg lg:text-[20px]">
                            আপনার প্রয়োজন অনুসারে পরিকল্পনাটি বেছে নিন
                        </Text>
                    </div>
                    <PricingSection />
                </SectionCardLayout>
            </div>

            {/* Full-width CTA Banner */}
            <section className="relative w-full h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">
                <Image
                    src="/assets/background_1.jpg"
                    alt="Pharmacy Management"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30">
                    <h2 className="text-white text-2xl md:text-4xl lg:text-[48px] font-bold leading-tight mb-6 max-w-4xl drop-shadow-lg">
                        পরীক্ষা করে দেখুন, আপনার ফার্মেসি ম্যানেজমেন্ট কতটা সহজ
                        হয়
                    </h2>

                    <CardButton
                        as="Button"
                        href="/get-started"
                        icon={<ArrowRightIcon className="w-4 h-4" />}
                        iconPosition="right"
                        variant="primary"
                        className="shadow-lg"
                    >
                        <span>{t("start")}</span>
                    </CardButton>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-12 md:py-16">
                <SectionCardLayout className="container">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                        <div>
                            <Heading className="mb-4 text-[#000000] text-2xl md:text-3xl lg:text-[48px] font-semibold leading-tight">
                                {t("how_to_help")}
                            </Heading>
                            <Text className="text-[#494A57] text-base md:text-lg lg:text-[20px]">
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
                        {/* Blog Card 1 */}
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
                                <SubHeading className="mb-4 text-[#000000] text-xl lg:text-[24px] font-semibold">
                                    {t("add_inventory")}
                                </SubHeading>
                                <Text className="text-[#494A57] text-base">
                                    {t("sub_add_inventory")}
                                </Text>
                                <div className="mt-4 flex items-center gap-2 cursor-pointer group transition-colors duration-200 hover:text-[#AB323C]">
                                    <span className="text-[#494A57] text-base group-hover:text-[#AB323C] transition-colors duration-200">
                                        ব্লগ পড়ুন
                                    </span>
                                    <ArrowRightIcon className="w-4 h-4 text-[#494A57] group-hover:text-[#AB323C] transition-colors duration-200" />
                                </div>
                            </div>
                        </CardComponent>

                        {/* Blog Card 2 */}
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
                                <SubHeading className="mb-4 text-[#000000] text-xl lg:text-[24px] font-semibold">
                                    {t("inventory_management")}
                                </SubHeading>
                                <Text className="text-[#494A57] text-base">
                                    {t("sub_heading")}
                                </Text>
                                <div className="mt-4 flex items-center gap-2 cursor-pointer group transition-colors duration-200 hover:text-[#AB323C]">
                                    <span className="text-[#494A57] text-base group-hover:text-[#AB323C] transition-colors duration-200">
                                        ব্লগ পড়ুন
                                    </span>
                                    <ArrowRightIcon className="w-4 h-4 text-[#494A57] group-hover:text-[#AB323C] transition-colors duration-200" />
                                </div>
                            </div>
                        </CardComponent>

                        {/* Blog Card 3 */}
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
                                <SubHeading className="mb-4 text-[#000000] text-xl lg:text-[24px] font-semibold">
                                    যোগাযোগ থাকুন, সহজেই ন্যানেজ
                                </SubHeading>
                                <Text className="text-[#494A57] text-base">
                                    আপনার আ্যাকাউন্ট তৈরি করুন এবং আপনার
                                    ফোর্মাসিন সেট আপ করুন
                                </Text>
                                <div className="mt-4 flex items-center gap-2 cursor-pointer group transition-colors duration-200 hover:text-[#AB323C]">
                                    <span className="text-[#494A57] text-base group-hover:text-[#AB323C] transition-colors duration-200">
                                        ব্লগ পড়ুন
                                    </span>
                                    <ArrowRightIcon className="w-4 h-4 text-[#494A57] group-hover:text-[#AB323C] transition-colors duration-200" />
                                </div>
                            </div>
                        </CardComponent>
                    </div>

                    {/* Centered Button */}
                    <div className="flex justify-center mt-10">
                        <CardButton
                            as="Button"
                            href="/get-started"
                            icon={<ArrowRightIcon className="w-4 h-4" />}
                            iconPosition="right"
                            variant="primary"
                            className="shadow-lg"
                        >
                            <span>{t("start")}</span>
                        </CardButton>
                    </div>
                </SectionCardLayout>
                <SubFooter />
            </section>
            {/* Footer Sections */}
            <Footer />
        </main>
    );
}
