import Image from "next/image";
import Button from "../ui/Button";
import VideoPlayer from "../VideoPlayer";
import { getT } from "@/i18n/server";
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const HeroSection = async () => {
    const t = await getT();

    return (
        <>
            <section className="px-4 md:px-6 pt-10 lg:pt-[150px] relative">
                <Image
                    src="/assets/Hero Section.svg"
                    alt="bg-gradient"
                    width={1000}
                    height={800}
                    className="hidden lg:block w-[1440px] h-[1293px] object-cover absolute top-0 left-0 "
                />
                <div className="container mx-auto relative z-20">
                    {/* Hero Section with Text */}
                    <div className="text-center mb-8">
                        <h1 className="max-w-[1030px] text-black text-4xl md:text-5xl lg:text-[72px] mb-4 leading-[110%] md:leading-[100%] font-medium text-center font-['Noto_Sans_Bengali_UI'] mx-auto">
                            {t("manage_pharmacy")}
                        </h1>

                        <p className="text-[#494A57] text-lg md:text-[20px] leading-[140%] md:leading-[100%] font-normal text-center font-['Noto_Sans_Bengali_UI'] mx-auto mb-8 max-w-[512px]">
                            {t("all_in_one_app")}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button
                                variant="primary"
                                size="md"
                                icon={<ArrowRightIcon className="w-4 h-4" />}
                                iconPosition="right"
                                className="px-6 py-3 text-base font-semibold leading-[150%] tracking-[-0.02em] text-center rounded-xl bg-[#AB323C] text-white hover:bg-[#9A2D36] transition-colors gap-2.5"
                            >
                                {t("start_free_trail")}
                            </Button>
                            <Button
                                variant="ghost"
                                size="md"
                                className="px-6 py-3 text-base font-semibold leading-[150%] tracking-[-0.02em] text-center rounded-xl bg-[#F8F8F8] text-[#494A57] hover:bg-gray-200 transition-colors gap-2.5 font-['Inter']"
                            >
                                {t("watch_demo")}
                            </Button>
                        </div>
                    </div>

                    {/* Video Demo Section */}
                    <div className="flex items-center justify-center relative">
                        <VideoPlayer />
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;