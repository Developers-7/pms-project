import Image from "next/image";
import { cn } from "@/lib/utils";

const FeatureInfoCard = ({
    image,
    title,
    description,
    className = "",
    imageAlt = "Feature image",
    children
}) => {
    return (
        <div
            className={cn(
                "w-full max-w-[395px] h-[528px] rounded-lg p-[20px] bg-white transition-shadow duration-300 ease-in-out hover:shadow-md",
                className
            )}
        >
            {/* Image Section */}
            <div className="relative h-[350px] w-full overflow-hidden mb-6">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            {/* Content Section */}
            <div className="text-left">
                <h3 className="mb-4 text-black text-[24px] font-semibold leading-[100%] font-['Noto_Sans_Bengali_UI']">
                    {title}
                </h3>
                <p className="text-[#494A57] text-[16px] font-normal leading-[160%] font-['Noto_Sans_Bengali_UI']">
                    {description}
                </p>

                {/* Additional content if provided */}
                {children}
            </div>
        </div>
    );
};

export default FeatureInfoCard;