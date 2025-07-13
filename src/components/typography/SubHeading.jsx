import React from 'react';
import {cn} from "@/lib/utils";

const SubHeading = ({
                        children,
                        className,
                        ...rest
                    }) => {
    return (
        <p
            className={cn("font-semibold text-lg text-text-color m-0", className)}
           {...rest}>
            {children}
        </p>
    );
};

export default SubHeading;