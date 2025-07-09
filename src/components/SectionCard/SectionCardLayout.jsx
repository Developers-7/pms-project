import React from 'react';
import {cn} from "@/lib/utils";

const SectionCardLayout = ({
                               className, children,

                           }) => {
    return (
        <div
            className={cn("bg-gradient-to-br space-y-15 w-full px-[100px] py-[120px] gap-2.5", className)}
        >
            {children}
        </div>
    );
};

export default SectionCardLayout;