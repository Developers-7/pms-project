import React from 'react';
import {cn} from "@/lib/utils";

const Text = ({
    className,
    children,
    ...rest
              }) => {
    return (
        <p className={cn("", className)} {...rest}>
            {children}
        </p>
    );
};

export default Text;