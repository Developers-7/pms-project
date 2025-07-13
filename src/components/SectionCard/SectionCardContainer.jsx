
import React from 'react';
import { cn } from "@/lib/utils";

const SectionCardContainer = ({
                                  className,
                                  children,
                                  space = "leftSpace", // equal, leftSpace, rightSpace
                              }) => {
    const size = {
        equal: "lg:grid-cols-[50%_50%]",
        leftSpace: "lg:grid-cols-[60%_40%]",
        rightSpace: "lg:grid-cols-[40%_60%]"
    }
    return (
        <div
            className={cn("grid grid-cols-1  xl:gap-28.75", size[space], className)}
        >
            {children}
        </div>
    );
};

export default SectionCardContainer;