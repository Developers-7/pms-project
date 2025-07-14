import { getT } from "@/i18n/server";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

// Layout components
import SectionCardLayout from "@/components/SectionCard/SectionCardLayout";
import Footer from "@/components/Footer";
import SubFooter from "@/components/SubFooter";
import FeatureCard from "@/components/FeatureCard";

// UI components
import Heading from "@/components/typography/Heading";
import SubHeading from "@/components/typography/SubHeading";
import Text from "@/components/typography/Text";
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
import HeroSection from "@/components/sections/HeroSection";
import CustomHeader from "@/components/card/CustomHeaderComponent";
import FeatureInfoCard from "@/components/card/FeatureInfoCard";
import BlogCard from "@/components/card/BlogCard";

export default async function Page() {
    const t = await getT();

    return (
        <main className="min-h-screen overflow-hidden">
            {/* Hero Section */}
            <HeroSection />
            <section className="pt-30 pb-15 mt-15">
                <CustomHeader
                    heading={"need_to_manage_pharmacy"}
                    subHeading={"mobile_app"}
                />
            </section>

            {/* More sections will follow */}
            <SectionCardLayout className="container">
                <FeatureCard
                    title={t("inventory_management")}
                    description={t("sub_heading")}
                    buttonText={t("start")}
                    imageUrl="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                    imageAlt="Inventory Management"
                    imagePosition="right"
                />
            </SectionCardLayout>

            {/* Feature Section with Right-aligned Image */}
            <SectionCardLayout className="container">
                <FeatureCard
                    title="বিক্রয় ও বিলিং"
                    description="আপনার বিক্রয় প্রক্রিয়া এখন হবে আরও দ্রুত ও সুবিধাজনক! কাস্টমারের জন্য সহজ বিলিং সিস্টেম, এবং সেলস রিপোর্টে সোজাসুজি ব্যবসার সঠিক অবস্থান জানুন।"
                    buttonText={t("start")}
                    imageUrl={CardImageThree.src}
                    imageAlt="Feature Image"
                    imagePosition="left"
                />
            </SectionCardLayout>

            {/* Feature Section with Left-aligned Image */}
            <SectionCardLayout className="container">
                <FeatureCard
                    title="অ্যাকাউন্টিং এবং রিপোর্ট"
                    description="দ্বিগুণ লাভ পেতে ব্যবসার আর্থিক হিসাব রাখতে হবে সঠিকভাবে। আমাদের সিস্টেম আপনাকে দেবে স্বয়ংক্রিয় হিসাব ও ডিটেইল রিপোর্ট, যা আপনার ব্যবসাকে এক নতুন উচ্চতায় নিয়ে যাবে।"
                    buttonText={t("start")}
                    imageUrl="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                    imageAlt="Feature Image"
                    imagePosition="right"
                />
            </SectionCardLayout>
            <section className="bg-[#F9F0F1] px-25 flex flex-col items-center gap-15">
                <SectionCardLayout className="container">
                    <div className="flex flex-col items-start lg:flex-row lg:items-center justify-between w-full">
                        <CustomHeader
                            heading={"how_to_help"}
                            subHeading={"start_with_platform"}
                            className="text-start items-start mb-6 lg:mb-0"
                        />
                        <CardButton
                            as="Link"
                            href="/get-started"
                            icon={<ArrowRightIcon className="w-4 h-4" />}
                            iconPosition="right"
                            variant="primary"
                        >
                            <span>{t("start")}</span>
                        </CardButton>
                    </div>

                    {/* Card Listing */}
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-25">
                        {/* Card 1 */}
                        <FeatureInfoCard
                            image={CardImageOne}
                            title="সাইন আপ করুন"
                            description="আপনার অ্যাকাউন্ট তৈরি করুন এবং আপনার প্রোফাইল সেট আপ করুন"
                        />

                        <FeatureInfoCard
                            image={CardImageTwo}
                            title="আপনার ইনভেন্টরি যুক্ত করুন"
                            description="আপনার অ্যাকাউন্ট তৈরি করুন এবং আপনার প্রোফাইল সেট আপ করুন"
                        />

                        <FeatureInfoCard
                            image={CardImageTwo}
                            title="যেখানেই থাকুন, সহজেই ম্যানেজ করুন আপনার শপ"
                            description="আপনার অ্যাকাউন্ট তৈরি করুন এবং আপনার প্রোফাইল
                        সেট আপ করুন"
                        />
                    </div>
                </SectionCardLayout>
            </section>
            {/*Card Section*/}
            <SectionCardLayout className="container">
                <CustomHeader
                    heading={"কেন ফার্মেসি মালিকরা ঔষধ সেবা পছন্দ করেন"}
                    subHeading={
                        "আমাদের স্বজ্ঞাত প্ল্যাটফর্মের সাথে কয়েক মিনিটের মধ্যে শুরু করুন"
                    }
                />
                <FeatureSection t={t} />
            </SectionCardLayout>
            {/* Mobile App Section */}
            <div className="bg-secondary-bg w-full">
                <SectionCardLayout className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden order-last lg:order-first">
                            <Image
                                src="/assets/mobile_background.png"
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
            </div>
            {/* Testimonials Section */}
            <div>
                <SectionCardLayout className="container ">
                    <CustomHeader
                        heading={"৫০০+ কাস্টমারের মন্তব্য"}
                        subHeading={
                            "হাজার হাজার সন্তুষ্ট সম্পত্তি পরিচালকদের সাথে যোগ দিন"
                        }
                    />
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
                    <CustomHeader
                        heading={
                            "দেশের সবচেয়ে আধুনিক অ্যাপ, আপনার হাতের নাগালে"
                        }
                        subHeading={
                            "আপনার প্রয়োজন অনুসারে পরিকল্পনাটি বেছে নিন"
                        }
                    />
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
            <section className="py-12 md:py-16 bg-secondary-bg w-full">
                <SectionCardLayout className="container">
                    <CustomHeader
                        heading={"ফার্মেসি বিজনেসের উন্নতি সম্পর্কিত গাইডলাইন"}
                        subHeading={
                            "হাজার হাজার সন্তুষ্ট সম্পত্তি পরিচালকদের সাথে যোগ দিন"
                        }
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Blog Card 1 */}
                        <BlogCard
                            date="মার্চ ০৪, ২০২৫"
                            title={t("add_inventory")}
                            description={t("sub_add_inventory")}
                            image={CardImageOne}
                        />
                        <BlogCard
                            date="মার্চ ০৪, ২০২৫"
                            title={t("add_inventory")}
                            description={t("sub_add_inventory")}
                            image={CardImageTwo}
                        />
                        <BlogCard
                            date="মার্চ ০৪, ২০২৫"
                            title={t("add_inventory")}
                            description={t("sub_add_inventory")}
                            image={CardImageThree}
                        />
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
