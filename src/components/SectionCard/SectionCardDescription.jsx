
import React from 'react';
import { cn } from "@/lib/utils";

const SectionCardDescription = ({
    className,
    children,
    ...rest
}) => {
    return (
        <div
            className={cn("w-full h-full flex items-center", className)}
            {...rest}
        >
            <div>
                {children}
            </div>
        </div>
    );
};

export default SectionCardDescription;