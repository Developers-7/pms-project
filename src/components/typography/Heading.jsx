import React from 'react';
import {cn} from "@/lib/utils";

const Heading = ({
    className,
    children,
    ...rest
                 }) => {
    return (
        <h1
            className={cn("font-semibold text-heading m-0", className)}
            {...rest}
        >
            {children}
        </h1>
    );
};

export default Heading;