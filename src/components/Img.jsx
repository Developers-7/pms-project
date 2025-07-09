import Image from "next/image";
import {cn} from "@/lib/utils";
const Img = ({
                 src,
                 alt = "Image",
                 width,
                 height,
                 layout = "responsive", // 'responsive' | 'fill' | 'intrinsic' | 'fixed'
                 objectFit = "cover",
                 className = "",
                 priority = false,
                 ...props
             }) => {
    const isFill = layout === "fill";

    return (
        <div
            className={cn(
                "relative",
                isFill ? "w-full h-full" : "",
                className
            )}
            style={!isFill && width && height ? { width, height } : undefined}
        >
            <Image
                src={src}
                alt={alt}
                fill={isFill}
                width={!isFill ? width : undefined}
                height={!isFill ? height : undefined}
                style={{ objectFit }}
                className="w-full h-full object-cover"
                priority={priority}
                {...props}
            />
        </div>
    );
};

export default Img;
