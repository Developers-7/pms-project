import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const BlogCard = ({
    image,
    date,
    title,
    description,
    className = "",
    imageAlt = "Blog image",
}) => {
    return (
        <div className={cn("w-full max-w-[395px] h-[528px] rounded-lg p-[20px] bg-white transition-shadow duration-300 ease-in-out hover:shadow-md", className)}>
            {/* Image Section */}
            <div className="relative h-[250px] w-full overflow-hidden mb-6">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            {/* Content Section */}
            <div className="text-left">
                <p className="mb-4 text-[#1D1E1F] text-sm font-medium leading-[100%] font-['Noto_Sans_Bengali_UI']">
                    {date}
                </p>
                <h3 className="mb-4 text-black text-[24px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                    {title}
                </h3>
                <p className="text-[#494A57] text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI']">
                    {description}
                </p>
                <div className="mt-4 flex items-center gap-2 cursor-pointer group transition-colors duration-200 hover:text-[#AB323C]">
                    <span className="text-[#494A57] text-base group-hover:text-[#AB323C] transition-colors duration-200">
                        ব্লগ পড়ুন
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-[#494A57] group-hover:text-[#AB323C] transition-colors duration-200" />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;