import React from 'react';
import { cn } from "@/lib/utils";

const SectionCardLayout = ({ className, children }) => {
    return (
        <div className={cn("space-y-4 lg:space-y-15 w-full py-9 lg:py-30 md:py-20 px-4 lg:px-0 md:px-0", className)}>
            {children}
        </div>
    );
};

export default SectionCardLayout;