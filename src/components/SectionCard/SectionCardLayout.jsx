
import React from 'react';
import { cn } from "@/lib/utils";

const SectionCardLayout = ({
                               className, children,

                           }) => {
    return (
        <div
            className={cn("space-y-15 w-full py-30", className)}
        >
            {children}
        </div>
    );
};

export default SectionCardLayout;