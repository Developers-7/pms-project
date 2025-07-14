import { getT } from "@/i18n/server";
import { cn } from "@/lib/utils";

const CustomHeader = async ({ heading, subHeading, className = '' }) => {
    const t = await getT();

    return (
        <div className={cn("flex flex-col items-center justify-center", className)}>
            <span className="text-center mb-6 text-[#000000] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-['Noto_Sans_Bengali_UI']">
                {t(heading)}
            </span>
            <span className="text-center text-[#494A57] text-lg md:text-xl lg:text-[20px] font-medium leading-relaxed max-w-2xl font-['Noto_Sans_Bengali_UI']">
                {t(subHeading)}
            </span>
        </div>
    )
}

export default CustomHeader;