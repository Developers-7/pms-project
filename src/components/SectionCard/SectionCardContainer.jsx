import React from 'react';
import {cn} from "@/lib/utils";

const SectionCardContainer = ({
                                  className,
                                  children
                              }) => {
    return (
        <div
            className={cn("grid grid-cols-1 lg:grid-cols-[60%_40%]", className)}
        >
            {children}
        </div>
    );
};

export default SectionCardContainer;